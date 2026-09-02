import { s, type EnumSchema } from "../core/index.js";

export const Status3 = {
  Active: "ACTIVE",
  Inactive: "INACTIVE",
  Closed: "CLOSED",
} as const;
export type Status3 = (typeof Status3)[keyof typeof Status3] | (string & {});

export const status3Schema: EnumSchema<Status3> = s.enumOf<Status3>(Status3);
