import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AnnotationEnumConnectivityIssue = {
  UnknownConnectivityIssue: "unknown_connectivity_issue",
  NoConnectivityIssue: "no_connectivity_issue",
  InvalidNumber: "invalid_number",
  CallerId: "caller_id",
  DroppedCall: "dropped_call",
  NumberReachability: "number_reachability",
} as const;
export type AnnotationEnumConnectivityIssue =
  | (typeof AnnotationEnumConnectivityIssue)[keyof typeof AnnotationEnumConnectivityIssue]
  | (string & {});

export const annotationEnumConnectivityIssueSchema: EnumSchema<AnnotationEnumConnectivityIssue> =
  s.enumOf<AnnotationEnumConnectivityIssue>(AnnotationEnumConnectivityIssue);
