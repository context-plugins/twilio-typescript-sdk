import { s, type EnumSchema } from "../core/index.js";

export const MetricEnumStreamDirection = {
  Unknown: "unknown",
  Inbound: "inbound",
  Outbound: "outbound",
  Both: "both",
} as const;
export type MetricEnumStreamDirection =
  | (typeof MetricEnumStreamDirection)[keyof typeof MetricEnumStreamDirection]
  | (string & {});

export const metricEnumStreamDirectionSchema: EnumSchema<MetricEnumStreamDirection> =
  s.enumOf<MetricEnumStreamDirection>(MetricEnumStreamDirection);
