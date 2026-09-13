"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLaunchpad } from "@/context/launchpad-context";
import { PhaseStatus } from "@/lib/types";

const phaseRoutes = [
  { id: "project-intake", path: "/project-intake", label: "Project Intake" },
  {
    id: "document-collection",
    path: "/document-collection",
    label: "Document Collection",
  },
  {
    id: "regulatory-context",
    path: "/regulatory-context",
    label: "Regulatory Pathway",
  },
  {
    id: "technical-review",
    path: "/technical-review",
    label: "Technical Review",
  },
  {
    id: "findings-readiness",
    path: "/findings-readiness",
    label: "Review-Ready Handoff",
  },
];

function StepIndicator({
  status,
  order,
  isActive,
}: {
  status: PhaseStatus;
  order: number;
  isActive: boolean;
}) {
  if (status === "complete") {
    return (
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-status-complete text-white">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path
            d="M2.5 6.5L4.5 8.5L9.5 3.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }
  if (status === "locked") {
    return (
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-surface-alt text-text-muted">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <rect
            x="1.5"
            y="4.5"
            width="7"
            height="5"
            rx="1"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="M3.5 4.5V3a1.5 1.5 0 013 0v1.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </span>
    );
  }
  return (
    <span
      className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold ${
        isActive
          ? "bg-navy text-white"
          : "bg-surface-alt text-text-secondary border border-border-light"
      }`}
    >
      {order}
    </span>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const { phases, getPhaseCompletion, getOverallReadiness } = useLaunchpad();
  const readiness = getOverallReadiness();

  return (
    <aside className="sidebar-scroll flex h-full w-[272px] flex-col overflow-y-auto bg-white border-r border-border">
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-5 border-b border-border-light">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy">
          <svg width="16" height="18" viewBox="0 0 20 24" fill="none">
            <path d="M0 0H20V4H4V24H0Z" fill="#CBD5DE" />
            <polygon points="4,10 16,10 20,14 4,14" fill="#6E8494" />
            <rect x="4" y="20" width="16" height="4" fill="#C4A862" />
          </svg>
        </div>
        <div>
          <div className="text-sm font-semibold tracking-wide text-navy">
            Envisor
          </div>
          <div className="text-[10px] text-text-muted tracking-widest uppercase font-medium">
            LaunchPad
          </div>
        </div>
      </div>

      {/* Readiness */}
      <div className="px-5 py-4 border-b border-border-light">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] uppercase tracking-widest text-text-muted font-medium">
            Review Readiness
          </span>
          <span className="text-xs font-semibold text-navy tabular-nums">
            {readiness}%
          </span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-border-light">
          <div
            className="h-1.5 rounded-full bg-navy transition-all duration-500"
            style={{ width: `${readiness}%` }}
          />
        </div>
      </div>

      {/* Overview link */}
      <nav className="flex-1 px-3 py-3">
        <Link
          href="/"
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-[13px] font-medium transition-colors ${
            pathname === "/"
              ? "bg-navy/5 text-navy border-l-2 border-navy"
              : "text-text-secondary hover:bg-surface-alt hover:text-text-primary"
          }`}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 16 16"
            fill="none"
            className="opacity-50"
          >
            <path
              d="M2 8.5V14h4.5v-4h3v4H14V8.5L8 3 2 8.5z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          Overview
        </Link>

        <div className="mt-5 mb-2 px-3">
          <span className="text-[10px] uppercase tracking-widest text-text-muted font-medium">
            Steps
          </span>
        </div>

        <div className="space-y-0.5">
          {phaseRoutes.map((route) => {
            const phase = phases.find((p) => p.id === route.id);
            if (!phase) return null;
            const isActive = pathname === route.path;
            const completion = getPhaseCompletion(route.id);
            const isLocked = phase.status === "locked";

            return (
              <Link
                key={route.id}
                href={route.path}
                className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors ${
                  isActive
                    ? "bg-navy/5 text-navy border-l-2 border-navy"
                    : isLocked
                    ? "text-text-muted hover:bg-surface-alt"
                    : "text-text-secondary hover:bg-surface-alt hover:text-text-primary"
                }`}
              >
                <StepIndicator
                  status={phase.status}
                  order={phase.order}
                  isActive={isActive}
                />
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-medium leading-tight">
                    {route.label}
                  </div>
                  {phase.status !== "locked" && (
                    <div className="mt-1.5 flex items-center gap-2">
                      <div className="flex-1 h-1 rounded-full bg-border-light">
                        <div
                          className="h-1 rounded-full bg-navy/40 transition-all duration-500"
                          style={{ width: `${completion}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-text-muted tabular-nums font-medium">
                        {completion}%
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="border-t border-border-light px-5 py-4">
        <div className="text-[10px] uppercase tracking-widest text-text-muted font-medium mb-3">
          Your Implementation Lead
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-bg text-gold-muted text-[11px] font-semibold flex-shrink-0">
            MR
          </div>
          <div className="min-w-0">
            <div className="text-[13px] font-medium text-text-primary truncate">
              Marcus Reyes
            </div>
            <div className="text-[11px] text-text-muted truncate">
              marcus@envisor.ai
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
