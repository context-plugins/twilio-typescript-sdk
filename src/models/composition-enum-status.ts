import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
