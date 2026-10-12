import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How Tasks will be assigned to Workers. Set this parameter to `LIFO` to assign most recently
 * created Task first or `FIFO` to assign the oldest Task. Default is FIFO. [Click
 * here](https://www.twilio.com/docs/taskrouter/queue-ordering-last-first-out-lifo) to learn more.
 */
export const TaskQueueEnumTaskOrder = {
  Fifo: "FIFO",
  Lifo: "LIFO",
} as const;
export type TaskQueueEnumTaskOrder =
  | (typeof TaskQueueEnumTaskOrder)[keyof typeof TaskQueueEnumTaskOrder]
  | (string & {});

export const taskQueueEnumTaskOrderSchema: EnumSchema<TaskQueueEnumTaskOrder> =
  s.enumOf<TaskQueueEnumTaskOrder>(TaskQueueEnumTaskOrder);
