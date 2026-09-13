"use client";

import { useLaunchpad } from "@/context/launchpad-context";
import PhaseHeader from "@/components/phase-header";
import TaskCard from "@/components/task-card";
import LockExplanation from "@/components/lock-explanation";

export default function TechnicalReviewPage() {
  const { phases, getPhaseCompletion } = useLaunchpad();
  const phase = phases.find((p) => p.id === "technical-review")!;
  const completion = getPhaseCompletion("technical-review");

  if (phase.status === "locked") {
    const prevPhase = phases.find((p) => p.id === "regulatory-context")!;
    return (
      <div>
        <PhaseHeader phase={phase} completion={completion} />
        <LockExplanation phase={phase} previousPhaseName={prevPhase.name} />
      </div>
    );
  }

  const envisorTasks = phase.tasks.filter((t) => t.owner === "envisor");
  const customerTasks = phase.tasks.filter((t) => t.owner === "customer");

  return (
    <div>
      <PhaseHeader phase={phase} completion={completion} />

      {/* Info banner */}
      <div className="rounded-xl border border-status-envisor/15 bg-status-envisor-bg/30 p-4 mb-6">
        <div className="flex items-start gap-3">
          <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-status-envisor-bg">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="text-status-envisor"
            >
              <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.3" />
              <path d="M7 4.5v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              <circle cx="7" cy="9.5" r="0.5" fill="currentColor" />
            </svg>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-text-primary mb-0.5">
              Envisor is reviewing your materials
            </h3>
            <p className="text-[11px] text-text-secondary leading-relaxed">
              Most tasks in this step are performed automatically by Envisor.
              Results will appear as each check completes. You may be asked to
              assign follow-up items once the review is done.
            </p>
          </div>
        </div>
      </div>

      {/* Envisor review tasks */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-sm font-semibold text-text-primary">
              Envisor review
            </h2>
            <p className="text-xs text-text-secondary mt-0.5">
              Automated completeness, consistency, and risk checks.
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

      {/* Customer follow-ups */}
      {customerTasks.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-semibold text-text-primary">
                Your follow-ups
              </h2>
              <p className="text-xs text-text-secondary mt-0.5">
                Tasks that require your input based on the review results.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            {customerTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
