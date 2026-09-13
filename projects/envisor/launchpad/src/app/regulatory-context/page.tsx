"use client";

import { useLaunchpad } from "@/context/launchpad-context";
import PhaseHeader from "@/components/phase-header";
import TaskCard from "@/components/task-card";
import LockExplanation from "@/components/lock-explanation";

export default function RegulatoryContextPage() {
  const { phases, getPhaseCompletion } = useLaunchpad();
  const phase = phases.find((p) => p.id === "regulatory-context")!;
  const completion = getPhaseCompletion("regulatory-context");

  if (phase.status === "locked") {
    const prevPhase = phases.find((p) => p.id === "document-collection")!;
    return (
      <div>
        <PhaseHeader phase={phase} completion={completion} />
        <LockExplanation phase={phase} previousPhaseName={prevPhase.name} />
      </div>
    );
  }

  const customerTasks = phase.tasks.filter((t) => t.owner === "customer");
  const envisorTasks = phase.tasks.filter((t) => t.owner === "envisor");

  return (
    <div>
      <PhaseHeader phase={phase} completion={completion} />

      {/* Customer tasks */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-sm font-semibold text-text-primary">
              Your tasks
            </h2>
            <p className="text-xs text-text-secondary mt-0.5">
              Confirm the regulatory framework, permits, and agency connections.
            </p>
          </div>
          <span className="text-[11px] text-text-muted">
            {customerTasks.filter((t) => t.status === "ready").length} of{" "}
            {customerTasks.length} ready
          </span>
        </div>
        <div className="space-y-3">
          {customerTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </section>

      {/* Envisor automated checks */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-sm font-semibold text-text-primary">
              Envisor automated checks
            </h2>
            <p className="text-xs text-text-secondary mt-0.5">
              Envisor searches regulatory databases for records relevant to your
              project area.
            </p>
          </div>
          <span className="text-[11px] text-text-muted">
            {envisorTasks.filter((t) => t.status === "ready").length} of{" "}
            {envisorTasks.length} ready
          </span>
        </div>
        <div className="space-y-3">
          {envisorTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </section>
    </div>
  );
}
