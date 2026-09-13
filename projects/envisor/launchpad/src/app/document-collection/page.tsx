"use client";

import { useLaunchpad } from "@/context/launchpad-context";
import PhaseHeader from "@/components/phase-header";
import TaskCard from "@/components/task-card";
import SourceSelector from "@/components/carrier-selector";
import LockExplanation from "@/components/lock-explanation";

export default function DocumentCollectionPage() {
  const { phases, getPhaseCompletion } = useLaunchpad();
  const phase = phases.find((p) => p.id === "document-collection")!;
  const completion = getPhaseCompletion("document-collection");

  if (phase.status === "locked") {
    const prevPhase = phases.find((p) => p.id === "project-intake")!;
    return (
      <div>
        <PhaseHeader phase={phase} completion={completion} />
        <LockExplanation phase={phase} previousPhaseName={prevPhase.name} />
      </div>
    );
  }

  return (
    <div>
      <PhaseHeader phase={phase} completion={completion} />

      {/* Source connections */}
      <section className="mb-8">
        <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">
          <SourceSelector />
        </div>
      </section>

      {/* Document tasks */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-sm font-semibold text-text-primary">
              Document tasks
            </h2>
            <p className="text-xs text-text-secondary mt-0.5">
              Upload materials and flag any known gaps.
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
