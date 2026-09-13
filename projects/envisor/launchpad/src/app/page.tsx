"use client";

import Link from "next/link";
import { useLaunchpad } from "@/context/launchpad-context";
import ProgressBar from "@/components/progress-bar";
import { PhaseStatus } from "@/lib/types";

function PhaseStatusLabel({ status }: { status: PhaseStatus }) {
  if (status === "complete") {
    return (
      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-status-complete">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M2.5 6.5L4.5 8.5L9.5 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Complete
      </span>
    );
  }
  if (status === "locked") {
    return (
      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-text-muted">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <rect
            x="2.5"
            y="5.5"
            width="7"
            height="5"
            rx="1"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="M4 5.5V4a2 2 0 014 0v1.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
        Locked
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-bg px-2.5 py-0.5 text-[11px] font-semibold text-gold-muted">
      <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
      In Progress
    </span>
  );
}

const phasePathMap: Record<string, string> = {
  "project-intake": "/project-intake",
  "document-collection": "/document-collection",
  "regulatory-context": "/regulatory-context",
  "technical-review": "/technical-review",
  "findings-readiness": "/findings-readiness",
};

export default function DashboardPage() {
  const {
    phases,
    getPhaseCompletion,
    getOverallReadiness,
    currentPhase,
    waitingOnYouCount,
    nextRequiredAction,
    envisorReviewStatus,
  } = useLaunchpad();
  const readiness = getOverallReadiness();

  return (
    <div>
      {/* Hero */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] uppercase tracking-widest text-text-muted font-medium">
            Envisor LaunchPad
          </span>
        </div>
        <h1 className="text-2xl font-semibold text-navy mb-2">
          Get Your Project Review-Ready
        </h1>
        <p className="text-sm text-text-secondary max-w-2xl leading-relaxed">
          Complete intake, upload required materials, confirm regulatory context,
          and resolve gaps before the broader team enters the Envisor workspace.
        </p>
      </div>

      {/* Dashboard Metrics */}
      <div className="rounded-xl border border-border bg-white p-6 mb-8 shadow-sm">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          <div>
            <div className="text-2xl font-bold text-navy tabular-nums">
              {readiness}%
            </div>
            <div className="text-[11px] text-text-muted font-medium mt-1">
              Project readiness
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-text-primary truncate">
              {currentPhase ? currentPhase.name : "All complete"}
            </div>
            <div className="text-[11px] text-text-muted font-medium mt-1">
              Current phase
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gold tabular-nums">
              {waitingOnYouCount}
            </div>
            <div className="text-[11px] text-text-muted font-medium mt-1">
              Waiting on you
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-text-primary">
              {envisorReviewStatus}
            </div>
            <div className="text-[11px] text-text-muted font-medium mt-1">
              Envisor review
            </div>
          </div>
        </div>

        {nextRequiredAction && (
          <div className="mt-5 pt-4 border-t border-border-light flex items-center gap-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              className="text-gold flex-shrink-0"
            >
              <path
                d="M8 3v5l3 2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="8"
                cy="8"
                r="6.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <span className="text-[11px] text-text-muted font-medium">
              Next required action:
            </span>
            <span className="text-xs font-semibold text-text-primary">
              {nextRequiredAction}
            </span>
          </div>
        )}
      </div>

      {/* Implementation Roadmap */}
      <div className="mb-8">
        <h2 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
          Implementation Roadmap
        </h2>
        <div className="space-y-2">
          {phases.map((phase) => {
            const completion = getPhaseCompletion(phase.id);
            const isLocked = phase.status === "locked";
            const isActive = phase.status === "active";
            const isComplete = phase.status === "complete";
            const href = phasePathMap[phase.id] || "/";

            return (
              <Link
                key={phase.id}
                href={href}
                className={`group flex items-center gap-5 rounded-xl border p-4 transition-all bg-white ${
                  isLocked
                    ? "border-border-light"
                    : "border-border shadow-sm hover:shadow-md"
                }`}
              >
                {/* Step number */}
                <span
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-xs font-semibold ${
                    isComplete
                      ? "bg-status-complete-bg text-status-complete"
                      : isActive
                      ? "bg-navy text-white"
                      : "bg-surface-alt text-text-muted"
                  }`}
                >
                  {isComplete ? (
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3.5 8.5L6.5 11.5L12.5 4.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    phase.order
                  )}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2.5 mb-0.5">
                    <h3
                      className={`text-sm font-semibold ${
                        isLocked ? "text-text-muted" : "text-text-primary"
                      }`}
                    >
                      {phase.name}
                    </h3>
                    {(isComplete || isActive) && (
                      <PhaseStatusLabel status={phase.status} />
                    )}
                  </div>
                  <p
                    className={`text-xs leading-relaxed ${
                      isLocked ? "text-text-muted" : "text-text-secondary"
                    }`}
                  >
                    {phase.description}
                  </p>
                  {!isLocked && (
                    <div className="max-w-xs mt-2">
                      <ProgressBar percentage={completion} size="sm" />
                    </div>
                  )}
                </div>

                {/* Right side */}
                <div className="flex-shrink-0 text-text-muted group-hover:text-navy transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M6 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Implementation Lead */}
      <div className="rounded-xl border border-border-light bg-white p-5 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-bg text-gold-muted text-sm font-semibold flex-shrink-0">
            MR
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] text-text-muted font-medium uppercase tracking-wider mb-0.5">
              Your Envisor Implementation Lead
            </div>
            <div className="text-sm font-semibold text-text-primary">
              Marcus Reyes
            </div>
            <p className="text-xs text-text-secondary leading-relaxed mt-0.5">
              Available to review materials, answer setup questions, and flag
              blockers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
