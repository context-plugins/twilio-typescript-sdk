import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status4 = {
  Unknown: "unknown",
  CreationInProgress: "creation-in-progress",
  Ready: "ready",
  CreationFailed: "creation-failed",
  DeletionInProgress: "deletion-in-progress",
  Deleted: "deleted",
  DeletionFailed: "deletion-failed",
} as const;
export type Status4 = (typeof Status4)[keyof typeof Status4] | (string & {});

export const status4Schema: EnumSchema<Status4> = s.enumOf<Status4>(Status4);
