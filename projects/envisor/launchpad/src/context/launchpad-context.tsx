"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";
import {
  Phase,
  DataSource,
  Finding,
  TaskStatus,
} from "@/lib/types";
import {
  initialPhases,
  initialDataSources,
  initialFindings,
} from "@/data/mock-data";

interface LaunchpadContextValue {
  phases: Phase[];
  dataSources: DataSource[];
  findings: Finding[];
  toggleDataSource: (id: string) => void;
  toggleFinding: (id: string) => void;
  updateTaskStatus: (taskId: string, status: TaskStatus) => void;
  getPhaseCompletion: (phaseId: string) => number;
  getOverallReadiness: () => number;
  selectedSourceCount: number;
  currentPhase: Phase | null;
  waitingOnYouCount: number;
  nextRequiredAction: string | null;
  envisorReviewStatus: "Not started" | "In progress" | "Complete";
}

const LaunchpadContext = createContext<LaunchpadContextValue | null>(null);

export function LaunchpadProvider({ children }: { children: ReactNode }) {
  const [phases, setPhases] = useState<Phase[]>(initialPhases);
  const [dataSources, setDataSources] =
    useState<DataSource[]>(initialDataSources);
  const [findings, setFindings] = useState<Finding[]>(initialFindings);

  const toggleDataSource = useCallback((id: string) => {
    setDataSources((prev) =>
      prev.map((s) => (s.id === id ? { ...s, selected: !s.selected } : s))
    );
  }, []);

  const toggleFinding = useCallback((id: string) => {
    setFindings((prev) =>
      prev.map((f) => (f.id === id ? { ...f, resolved: !f.resolved } : f))
    );
  }, []);

  const updateTaskStatus = useCallback(
    (taskId: string, newStatus: TaskStatus) => {
      setPhases((prev) => {
        const updated = prev.map((phase) => ({
          ...phase,
          tasks: phase.tasks.map((task) =>
            task.id === taskId ? { ...task, status: newStatus } : task
          ),
        }));

        return updated.map((phase) => {
          // Unlock next phase when all tasks in previous phase are ready
          if (phase.status === "locked" && phase.order > 1) {
            const previousPhase = updated.find(
              (p) => p.order === phase.order - 1
            );
            if (previousPhase) {
              const allReady = previousPhase.tasks.every(
                (t) => t.status === "ready"
              );
              if (allReady) {
                return {
                  ...phase,
                  status: "active" as const,
                  tasks: phase.tasks.map((t) =>
                    t.status === "not_started"
                      ? {
                          ...t,
                          status: (t.owner === "customer"
                            ? "waiting_on_customer"
                            : "under_envisor_review") as TaskStatus,
                        }
                      : t
                  ),
                };
              }
            }
          }
          // Mark phase complete if all tasks are ready
          if (phase.status === "active") {
            const allReady = phase.tasks.every((t) => t.status === "ready");
            if (allReady) {
              return { ...phase, status: "complete" as const };
            }
          }
          return phase;
        });
      });
    },
    []
  );

  const getPhaseCompletion = useCallback(
    (phaseId: string) => {
      const phase = phases.find((p) => p.id === phaseId);
      if (!phase || phase.tasks.length === 0) return 0;
      const ready = phase.tasks.filter((t) => t.status === "ready").length;
      return Math.round((ready / phase.tasks.length) * 100);
    },
    [phases]
  );

  const getOverallReadiness = useCallback(() => {
    const allTasks = phases.flatMap((p) => p.tasks);
    if (allTasks.length === 0) return 0;
    const ready = allTasks.filter((t) => t.status === "ready").length;
    return Math.round((ready / allTasks.length) * 100);
  }, [phases]);

  const selectedSourceCount = dataSources.filter((s) => s.selected).length;

  const currentPhase = useMemo(
    () => phases.find((p) => p.status === "active") ?? null,
    [phases]
  );

  const waitingOnYouCount = useMemo(
    () =>
      phases
        .flatMap((p) => p.tasks)
        .filter(
          (t) =>
            t.owner === "customer" &&
            (t.status === "waiting_on_customer" ||
              t.status === "in_progress" ||
              t.status === "blocked")
        ).length,
    [phases]
  );

  const nextRequiredAction = useMemo(() => {
    if (!currentPhase) return null;
    const task = currentPhase.tasks.find(
      (t) => t.owner === "customer" && t.status !== "ready"
    );
    return task ? task.title : null;
  }, [currentPhase]);

  const envisorReviewStatus = useMemo((): "Not started" | "In progress" | "Complete" => {
    const techReview = phases.find((p) => p.id === "technical-review");
    if (!techReview) return "Not started";
    if (techReview.status === "complete") return "Complete";
    if (techReview.status === "active") return "In progress";
    return "Not started";
  }, [phases]);

  return (
    <LaunchpadContext.Provider
      value={{
        phases,
        dataSources,
        findings,
        toggleDataSource,
        toggleFinding,
        updateTaskStatus,
        getPhaseCompletion,
        getOverallReadiness,
        selectedSourceCount,
        currentPhase,
        waitingOnYouCount,
        nextRequiredAction,
        envisorReviewStatus,
      }}
    >
      {children}
    </LaunchpadContext.Provider>
  );
}

export function useLaunchpad() {
  const context = useContext(LaunchpadContext);
  if (!context) {
    throw new Error("useLaunchpad must be used within a LaunchpadProvider");
  }
  return context;
}
