import { s, type EnumSchema } from "../core/index.js";

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
