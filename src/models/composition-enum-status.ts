import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the composition. Can be: `enqueued`, `processing`, `completed`, `deleted` or
 * `failed`. `enqueued` is the initial state and indicates that the composition request has been
 * received and is scheduled for processing; `processing` indicates the composition is being
 * processed; `completed` indicates the composition has been completed and is available for
 * download; `deleted` means the composition media has been deleted from the system, but its
 * metadata is still available for 30 days; `failed` indicates the composition failed to execute the
 * media processing task.
 */
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
