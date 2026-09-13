"use client";

import { Task, TaskStatus } from "@/lib/types";
import { useLaunchpad } from "@/context/launchpad-context";
import StatusBadge from "./status-badge";

const nextStatusMap: Partial<Record<TaskStatus, TaskStatus>> = {
  waiting_on_customer: "ready",
  in_progress: "ready",
  not_started: "in_progress",
  under_envisor_review: "ready",
  blocked: "ready",
};

const actionLabels: Partial<Record<TaskStatus, string>> = {
  waiting_on_customer: "Mark ready",
  in_progress: "Mark ready",
  not_started: "Start",
  under_envisor_review: "Approve",
  blocked: "Resolve",
};

export default function TaskCard({ task }: { task: Task }) {
  const { updateTaskStatus } = useLaunchpad();
  const canAdvance = task.status in nextStatusMap;
  const isNotStarted = task.status === "not_started";
  const isReady = task.status === "ready";

  function handleAction() {
    const next = nextStatusMap[task.status];
    if (next) {
      updateTaskStatus(task.id, next);
    }
  }

  return (
    <div
      className={`rounded-lg border p-4 transition-all ${
        isReady
          ? "border-status-complete/20 bg-status-complete-bg/30"
          : isNotStarted
          ? "border-border-light bg-surface"
          : "border-border bg-surface shadow-sm"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
            <h3 className="text-sm font-semibold text-text-primary">
              {task.title}
            </h3>
            <StatusBadge status={task.status} />
          </div>
          <p className="text-xs text-text-secondary leading-relaxed mb-2">
            {task.description}
          </p>
          <div className="flex items-center gap-4 text-[11px] text-text-muted">
            <span className="flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle
                  cx="6"
                  cy="4"
                  r="2"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M2 11c0-2.2 1.8-4 4-4s4 1.8 4 4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
              {task.owner === "customer" ? "You" : "Envisor"}
            </span>
            {task.estimatedEffort && (
              <span className="flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle
                    cx="6"
                    cy="6"
                    r="4.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M6 3.5V6l2 1.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
                {task.estimatedEffort}
              </span>
            )}
          </div>
        </div>
        <div className="flex-shrink-0 pt-0.5">
          {canAdvance && (
            <button
              onClick={handleAction}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                isNotStarted
                  ? "bg-surface-alt text-text-primary border border-border hover:bg-border"
                  : task.status === "blocked"
                  ? "bg-status-attention text-white hover:bg-red-700"
                  : "bg-navy text-white hover:bg-navy-light"
              }`}
            >
              {actionLabels[task.status]}
            </button>
          )}
          {isReady && (
            <span className="flex items-center gap-1 text-xs text-status-complete font-medium">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7.5L5.5 10L11 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Ready
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
