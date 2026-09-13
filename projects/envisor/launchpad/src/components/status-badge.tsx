import { TaskStatus } from "@/lib/types";

const statusConfig: Record<
  TaskStatus,
  { label: string; className: string; dotClass: string }
> = {
  not_started: {
    label: "Not started",
    className: "bg-status-locked-bg text-status-locked",
    dotClass: "bg-status-locked",
  },
  in_progress: {
    label: "In progress",
    className: "bg-status-reviewing-bg text-status-reviewing",
    dotClass: "bg-status-reviewing",
  },
  waiting_on_customer: {
    label: "Waiting on customer",
    className: "bg-status-waiting-bg text-status-waiting",
    dotClass: "bg-status-waiting",
  },
  under_envisor_review: {
    label: "Under Envisor review",
    className: "bg-status-envisor-bg text-status-envisor",
    dotClass: "bg-status-envisor",
  },
  blocked: {
    label: "Blocked",
    className: "bg-status-attention-bg text-status-attention",
    dotClass: "bg-status-attention",
  },
  ready: {
    label: "Ready",
    className: "bg-status-complete-bg text-status-complete",
    dotClass: "bg-status-complete",
  },
};

export default function StatusBadge({ status }: { status: TaskStatus }) {
  const config = statusConfig[status];
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${config.className}`}
    >
      <span className={`mr-1.5 h-1.5 w-1.5 rounded-full ${config.dotClass}`} />
      {config.label}
    </span>
  );
}
