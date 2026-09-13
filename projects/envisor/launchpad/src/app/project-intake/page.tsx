"use client";

import { useLaunchpad } from "@/context/launchpad-context";
import PhaseHeader from "@/components/phase-header";
import TaskCard from "@/components/task-card";

export default function ProjectIntakePage() {
  const { phases, getPhaseCompletion } = useLaunchpad();
  const phase = phases.find((p) => p.id === "project-intake")!;
  const completion = getPhaseCompletion("project-intake");

  return (
    <div>
      <PhaseHeader phase={phase} completion={completion} />

      <section>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-sm font-semibold text-text-primary">
              Intake tasks
            </h2>
            <p className="text-xs text-text-secondary mt-0.5">
              Provide the project details Envisor needs to get started.
            </p>
          </div>
          <span className="text-[11px] text-text-muted">
            {phase.tasks.filter((t) => t.status === "ready").length} of{" "}
            {phase.tasks.length} ready
          </span>
        </div>
        <div className="space-y-3">
          {phase.tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </section>
    </div>
  );
}
