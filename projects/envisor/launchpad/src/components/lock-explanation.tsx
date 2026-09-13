import { Phase } from "@/lib/types";

export default function LockExplanation({
  phase,
  previousPhaseName,
}: {
  phase: Phase;
  previousPhaseName: string;
}) {
  if (phase.status !== "locked") return null;

  return (
    <div className="rounded-lg border border-border-light bg-surface-alt p-6 text-center max-w-lg mx-auto">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-border">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-text-muted"
        >
          <rect
            x="5"
            y="10"
            width="14"
            height="11"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8 10V7a4 4 0 018 0v3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <h3 className="text-sm font-semibold text-text-primary mb-1">
        This step is locked
      </h3>
      <p className="text-xs text-text-secondary leading-relaxed">
        Complete all tasks in{" "}
        <span className="font-semibold text-text-primary">
          {previousPhaseName}
        </span>{" "}
        to unlock{" "}
        <span className="font-semibold text-text-primary">{phase.name}</span>.
        Each step builds on the previous one to ensure your environmental review
        workspace starts from a complete, verified project record.
      </p>
    </div>
  );
}
