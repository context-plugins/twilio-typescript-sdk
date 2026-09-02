import { s, type EnumSchema } from "../core/index.js";

export const TaskQueueEnumTaskOrder = {
  Fifo: "FIFO",
  Lifo: "LIFO",
} as const;
export type TaskQueueEnumTaskOrder =
  | (typeof TaskQueueEnumTaskOrder)[keyof typeof TaskQueueEnumTaskOrder]
  | (string & {});

export const taskQueueEnumTaskOrderSchema: EnumSchema<TaskQueueEnumTaskOrder> =
  s.enumOf<TaskQueueEnumTaskOrder>(TaskQueueEnumTaskOrder);
