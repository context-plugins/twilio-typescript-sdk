import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  annotationEnumAnsweredBySchema,
  type AnnotationEnumAnsweredBy,
} from "./annotation-enum-answered-by.js";
import {
  annotationEnumConnectivityIssueSchema,
  type AnnotationEnumConnectivityIssue,
} from "./annotation-enum-connectivity-issue.js";

export type InsightsV1CallAnnotation = {
  callSid?: string | null;
  accountSid?: string | null;
  answeredBy?: AnnotationEnumAnsweredBy;
  connectivityIssue?: AnnotationEnumConnectivityIssue;
  qualityIssues?: string[] | null;
  spam?: boolean | null;
  callScore?: number | null;
  comment?: string | null;
  incident?: string | null;
  url?: string | null;
};

export const insightsV1CallAnnotationSchema: Schema<InsightsV1CallAnnotation> =
  s.object<InsightsV1CallAnnotation>({
    callSid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    answeredBy: s.optional(s.lazy(() => annotationEnumAnsweredBySchema)),
    connectivityIssue: s.optional(s.lazy(() => annotationEnumConnectivityIssueSchema)),
    qualityIssues: s.optionalNullable(s.array(s.string())),
    spam: s.optionalNullable(s.boolean()),
    callScore: s.optionalNullable(s.number()),
    comment: s.optionalNullable(s.string()),
    incident: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      callSid: "call_sid",
      accountSid: "account_sid",
      answeredBy: "answered_by",
      connectivityIssue: "connectivity_issue",
      qualityIssues: "quality_issues",
      callScore: "call_score",
    },
  });
