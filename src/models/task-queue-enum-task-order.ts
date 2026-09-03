import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TaskQueueEnumTaskOrder = {
  Fifo: "FIFO",
  Lifo: "LIFO",
} as const;
export type TaskQueueEnumTaskOrder =
  | (typeof TaskQueueEnumTaskOrder)[keyof typeof TaskQueueEnumTaskOrder]
  | (string & {});

export const taskQueueEnumTaskOrderSchema: EnumSchema<TaskQueueEnumTaskOrder> =
  s.enumOf<TaskQueueEnumTaskOrder>(TaskQueueEnumTaskOrder);
