export type PhaseStatus = "locked" | "active" | "complete";

export type TaskStatus =
  | "not_started"
  | "in_progress"
  | "waiting_on_customer"
  | "under_envisor_review"
  | "blocked"
  | "ready";

export type TaskOwner = "customer" | "envisor";

export interface Task {
  id: string;
  phaseId: string;
  title: string;
  description: string;
  status: TaskStatus;
  owner: TaskOwner;
  estimatedEffort?: string;
}

export interface Phase {
  id: string;
  name: string;
  description: string;
  helperText: string;
  order: number;
  status: PhaseStatus;
  tasks: Task[];
}

export interface DataSource {
  id: string;
  name: string;
  category: string;
  description: string;
  selected: boolean;
  setupComplete: boolean;
}

export interface Finding {
  id: string;
  title: string;
  category: string;
  severity: "blocker" | "warning" | "info";
  description: string;
  resolved: boolean;
}
