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
  /** The unique SID identifier of the Call. */
  callSid?: string | null;
  /** The unique SID identifier of the Account. */
  accountSid?: string | null;
  answeredBy?: AnnotationEnumAnsweredBy;
  connectivityIssue?: AnnotationEnumConnectivityIssue;
  /**
   * Specifies if the call had any subjective quality issues. Possible values are one or more of
   * `no_quality_issue`, `low_volume`, `choppy_robotic`, `echo`, `dtmf`, `latency`, `owa`, or
   * `static_noise`.
   */
  qualityIssues?: string[] | null;
  /**
   * Specifies if the call was a spam call. Use this to provide feedback on whether calls placed
   * from your account were marked as spam, or if inbound calls received by your account were
   * unwanted spam. Is of type Boolean: true, false. Use true if the call was a spam call.
   */
  spam?: boolean | null;
  /**
   * Specifies the Call Score, if available. This is of type integer. Use a range of 1-5 to indicate
   * the call experience score, with the following mapping as a reference for rating the call [5:
   * Excellent, 4: Good, 3 : Fair, 2 : Poor, 1: Bad].
   */
  callScore?: number | null;
  /**
   * Specifies any comments pertaining to the call. Twilio does not treat this field as PII, so no
   * PII should be included in comments.
   */
  comment?: string | null;
  /**
   * Incident or support ticket associated with this call. The `incident` property is of type string
   * with a maximum character limit of 100. Twilio does not treat this field as PII, so no PII
   * should be included in `incident`.
   */
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
    callScore: s.optionalNullable(s.int()),
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
