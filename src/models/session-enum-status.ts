import { s, type EnumSchema } from "../core/index.js";

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
