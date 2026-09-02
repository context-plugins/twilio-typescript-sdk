import { s, type EnumSchema } from "../core/index.js";

export const EndStatus = {
  Unknown: "unknown",
  Failure: "failure",
  Ended: "ended",
  HungUp: "hung_up",
} as const;
export type EndStatus = (typeof EndStatus)[keyof typeof EndStatus] | (string & {});

export const endStatusSchema: EnumSchema<EndStatus> = s.enumOf<EndStatus>(EndStatus);
