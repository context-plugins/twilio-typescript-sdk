import { s, type EnumSchema } from "../core/index.js";

export const CompositionEnumStatus = {
  Enqueued: "enqueued",
  Processing: "processing",
  Completed: "completed",
  Deleted: "deleted",
  Failed: "failed",
} as const;
export type CompositionEnumStatus =
  | (typeof CompositionEnumStatus)[keyof typeof CompositionEnumStatus]
  | (string & {});

export const compositionEnumStatusSchema: EnumSchema<CompositionEnumStatus> =
  s.enumOf<CompositionEnumStatus>(CompositionEnumStatus);
