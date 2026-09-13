import { Phase } from "@/lib/types";
import ProgressBar from "./progress-bar";

export default function PhaseHeader({
  phase,
  completion,
}: {
  phase: Phase;
  completion: number;
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[11px] uppercase tracking-widest text-text-muted font-medium">
          Step {phase.order} of 5
        </span>
        {phase.status === "complete" && (
          <span className="inline-flex items-center rounded-full bg-status-complete-bg px-2 py-0.5 text-[10px] font-semibold text-status-complete uppercase tracking-wide">
            Ready
          </span>
        )}
      </div>
      <h1 className="text-2xl font-semibold text-text-primary mb-2">
        {phase.name}
      </h1>
      <p className="text-sm text-text-secondary max-w-2xl mb-4">
        {phase.helperText}
      </p>
      <div className="max-w-md">
        <ProgressBar percentage={completion} size="md" />
      </div>
    </div>
  );
}
