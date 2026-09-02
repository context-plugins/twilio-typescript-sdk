import { s, type EnumSchema } from "../core/index.js";

export const Status1 = {
  Live: "LIVE",
  NotLive: "NOT_LIVE",
} as const;
export type Status1 = (typeof Status1)[keyof typeof Status1] | (string & {});

export const status1Schema: EnumSchema<Status1> = s.enumOf<Status1>(Status1);
