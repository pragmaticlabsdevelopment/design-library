"use client";

import { useLaunchpad } from "@/context/launchpad-context";
import PhaseHeader from "@/components/phase-header";
import TaskCard from "@/components/task-card";
import LockExplanation from "@/components/lock-explanation";
import { Finding } from "@/lib/types";

const severityConfig: Record<
  Finding["severity"],
  { label: string; className: string; dotClass: string }
> = {
  blocker: {
    label: "Blocker",
    className: "bg-status-attention-bg text-status-attention",
    dotClass: "bg-status-attention",
  },
  warning: {
    label: "Warning",
    className: "bg-status-waiting-bg text-status-waiting",
    dotClass: "bg-status-waiting",
  },
  info: {
    label: "Info",
    className: "bg-status-reviewing-bg text-status-reviewing",
    dotClass: "bg-status-reviewing",
  },
};

export default function FindingsReadinessPage() {
  const { phases, getPhaseCompletion, findings, toggleFinding } =
    useLaunchpad();
  const phase = phases.find((p) => p.id === "findings-readiness")!;
  const completion = getPhaseCompletion("findings-readiness");

  if (phase.status === "locked") {
    const prevPhase = phases.find((p) => p.id === "technical-review")!;
    return (
      <div>
        <PhaseHeader phase={phase} completion={completion} />
        <LockExplanation phase={phase} previousPhaseName={prevPhase.name} />
      </div>
    );
  }

  const openFindings = findings.filter((f) => !f.resolved);
  const resolvedFindings = findings.filter((f) => f.resolved);
  const blockerCount = openFindings.filter(
    (f) => f.severity === "blocker"
  ).length;
  const warningCount = openFindings.filter(
    (f) => f.severity === "warning"
  ).length;
  const infoCount = openFindings.filter((f) => f.severity === "info").length;

  const allComplete = phase.tasks.every((t) => t.status === "ready");

  return (
    <div>
      <PhaseHeader phase={phase} completion={completion} />

      {/* Findings summary */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        <div className="rounded-lg border border-border bg-surface p-3 text-center">
          <div className="text-lg font-bold text-text-primary">
            {openFindings.length}
          </div>
          <div className="text-[11px] text-text-muted font-medium">Open</div>
        </div>
        <div className="rounded-lg border border-border bg-surface p-3 text-center">
          <div className="text-lg font-bold text-status-attention">
            {blockerCount}
          </div>
          <div className="text-[11px] text-text-muted font-medium">
            Blockers
          </div>
        </div>
        <div className="rounded-lg border border-border bg-surface p-3 text-center">
          <div className="text-lg font-bold text-status-waiting">
            {warningCount}
          </div>
          <div className="text-[11px] text-text-muted font-medium">
            Warnings
          </div>
        </div>
        <div className="rounded-lg border border-border bg-surface p-3 text-center">
          <div className="text-lg font-bold text-status-complete">
            {resolvedFindings.length}
          </div>
          <div className="text-[11px] text-text-muted font-medium">
            Resolved
          </div>
        </div>
      </div>

      {/* Findings table */}
      <section className="mb-8">
        <h2 className="text-sm font-semibold text-text-primary mb-3">
          Findings
        </h2>
        <div className="rounded-xl border border-border bg-surface shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface-alt">
                <th className="px-4 py-2.5 text-left text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                  Finding
                </th>
                <th className="px-4 py-2.5 text-left text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                  Category
                </th>
                <th className="px-4 py-2.5 text-left text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                  Severity
                </th>
                <th className="px-4 py-2.5 text-right text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {[...openFindings, ...resolvedFindings].map((finding) => {
                const config = severityConfig[finding.severity];
                return (
                  <tr
                    key={finding.id}
                    className={`border-b border-border-light last:border-0 ${
                      finding.resolved ? "opacity-50" : ""
                    }`}
                  >
                    <td className="px-4 py-3">
                      <div className="text-xs font-semibold text-text-primary">
                        {finding.title}
                      </div>
                      <div className="text-[11px] text-text-muted mt-0.5 leading-relaxed">
                        {finding.description}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs text-text-secondary whitespace-nowrap">
                      {finding.category}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${config.className}`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${config.dotClass}`}
                        />
                        {config.label}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      {finding.resolved ? (
                        <button
                          onClick={() => toggleFinding(finding.id)}
                          className="text-[11px] font-medium text-text-muted hover:text-text-primary transition-colors"
                        >
                          Reopen
                        </button>
                      ) : (
                        <button
                          onClick={() => toggleFinding(finding.id)}
                          className="rounded-lg border border-border px-3 py-1 text-[11px] font-semibold text-text-primary hover:bg-surface-alt transition-colors"
                        >
                          Resolve
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Completion banner */}
      {allComplete && (
        <div className="rounded-xl border border-status-complete/20 bg-status-complete-bg/40 p-5 mb-6">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-status-complete-bg">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="text-status-complete"
              >
                <path
                  d="M4.5 9.5L7.5 12.5L13.5 5.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-text-primary mb-1">
                Ready to launch workspace
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                All findings have been addressed and readiness tasks are
                complete. Invite your broader project team and move into the
                Envisor Project Command Center to begin environmental review
                workflows.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Readiness tasks */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-sm font-semibold text-text-primary">
              Readiness tasks
            </h2>
            <p className="text-xs text-text-secondary mt-0.5">
              Confirm ownership, resolve blockers, and prepare to launch.
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
