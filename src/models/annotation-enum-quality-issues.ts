import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AnnotationEnumQualityIssues = {
  UnknownQualityIssue: "unknown_quality_issue",
  NoQualityIssue: "no_quality_issue",
  LowVolume: "low_volume",
  ChoppyRobotic: "choppy_robotic",
  Echo: "echo",
  Dtmf: "dtmf",
  Latency: "latency",
  Owa: "owa",
  StaticNoise: "static_noise",
} as const;
export type AnnotationEnumQualityIssues =
  | (typeof AnnotationEnumQualityIssues)[keyof typeof AnnotationEnumQualityIssues]
  | (string & {});

export const annotationEnumQualityIssuesSchema: EnumSchema<AnnotationEnumQualityIssues> =
  s.enumOf<AnnotationEnumQualityIssues>(AnnotationEnumQualityIssues);
