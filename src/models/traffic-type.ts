import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TrafficType = {
  Transactional: "TRANSACTIONAL",
  Promotional: "PROMOTIONAL",
  Both: "BOTH",
} as const;
export type TrafficType = (typeof TrafficType)[keyof typeof TrafficType] | (string & {});

export const trafficTypeSchema: EnumSchema<TrafficType> = s.enumOf<TrafficType>(TrafficType);
