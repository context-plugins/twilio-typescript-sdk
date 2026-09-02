import { s, type EnumSchema } from "../core/index.js";

export const TrafficType = {
  Transactional: "TRANSACTIONAL",
  Promotional: "PROMOTIONAL",
  Both: "BOTH",
} as const;
export type TrafficType = (typeof TrafficType)[keyof typeof TrafficType] | (string & {});

export const trafficTypeSchema: EnumSchema<TrafficType> = s.enumOf<TrafficType>(TrafficType);
