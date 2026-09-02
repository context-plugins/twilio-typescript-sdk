import { s, type EnumSchema } from "../core/index.js";

export const WorkspaceEnumQueueOrder = {
  Fifo: "FIFO",
  Lifo: "LIFO",
} as const;
export type WorkspaceEnumQueueOrder =
  | (typeof WorkspaceEnumQueueOrder)[keyof typeof WorkspaceEnumQueueOrder]
  | (string & {});

export const workspaceEnumQueueOrderSchema: EnumSchema<WorkspaceEnumQueueOrder> =
  s.enumOf<WorkspaceEnumQueueOrder>(WorkspaceEnumQueueOrder);
