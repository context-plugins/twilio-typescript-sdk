import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of TaskQueue to prioritize when Workers are receiving Tasks from both types of
 * TaskQueues. Can be: `LIFO` or `FIFO` and the default is `FIFO`. For more information, see [Queue
 * Ordering](https://www.twilio.com/docs/taskrouter/queue-ordering-last-first-out-lifo).
 */
export const WorkspaceEnumQueueOrder = {
  Fifo: "FIFO",
  Lifo: "LIFO",
} as const;
export type WorkspaceEnumQueueOrder =
  | (typeof WorkspaceEnumQueueOrder)[keyof typeof WorkspaceEnumQueueOrder]
  | (string & {});

export const workspaceEnumQueueOrderSchema: EnumSchema<WorkspaceEnumQueueOrder> =
  s.enumOf<WorkspaceEnumQueueOrder>(WorkspaceEnumQueueOrder);
