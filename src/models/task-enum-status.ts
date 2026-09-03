import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TaskEnumStatus = {
  Pending: "pending",
  Reserved: "reserved",
  Assigned: "assigned",
  Canceled: "canceled",
  Completed: "completed",
  Wrapping: "wrapping",
} as const;
export type TaskEnumStatus = (typeof TaskEnumStatus)[keyof typeof TaskEnumStatus] | (string & {});

export const taskEnumStatusSchema: EnumSchema<TaskEnumStatus> = s.enumOf<TaskEnumStatus>(TaskEnumStatus);
