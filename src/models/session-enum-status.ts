import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the Session. Can be: `open`, `in-progress`, `closed`, `failed`, or `unknown`. */
export const SessionEnumStatus = {
  Open: "open",
  InProgress: "in-progress",
  Closed: "closed",
  Failed: "failed",
  Unknown: "unknown",
} as const;
export type SessionEnumStatus = (typeof SessionEnumStatus)[keyof typeof SessionEnumStatus] | (string & {});

export const sessionEnumStatusSchema: EnumSchema<SessionEnumStatus> =
  s.enumOf<SessionEnumStatus>(SessionEnumStatus);
