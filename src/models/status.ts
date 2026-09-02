import { s, type EnumSchema } from "../core/index.js";

export const Status = {
  Live: "LIVE",
  NotLive: "NOT_LIVE",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
