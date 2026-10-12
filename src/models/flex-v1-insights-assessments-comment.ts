import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV1InsightsAssessmentsComment = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex
   * Insights resource and owns this resource.
   */
  accountSid?: string | null;
  /** The SID of the assessment. */
  assessmentSid?: string | null;
  /** The comment added for assessment. */
  comment?: Record<string, unknown> | null;
  /** The offset */
  offset?: string | null;
  /** The flag indicating if this assessment is part of report */
  report?: boolean | null;
  /** The weightage given to this comment */
  weight?: string | null;
  /** The id of the agent. */
  agentId?: string | null;
  /** The id of the segment. */
  segmentId?: string | null;
  /** The name of the user. */
  userName?: string | null;
  /** The email id of the user. */
  userEmail?: string | null;
  /** The timestamp when the record is inserted */
  timestamp?: string | null;
  url?: string | null;
};

export const flexV1InsightsAssessmentsCommentSchema: Schema<FlexV1InsightsAssessmentsComment> =
  s.object<FlexV1InsightsAssessmentsComment>({
    accountSid: s.optionalNullable(s.string()),
    assessmentSid: s.optionalNullable(s.string()),
    comment: s.optionalNullable(s.record(s.string(), s.unknown())),
    offset: s.optionalNullable(s.string()),
    report: s.optionalNullable(s.boolean()),
    weight: s.optionalNullable(s.string()),
    agentId: s.optionalNullable(s.string()),
    segmentId: s.optionalNullable(s.string()),
    userName: s.optionalNullable(s.string()),
    userEmail: s.optionalNullable(s.string()),
    timestamp: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      assessmentSid: "assessment_sid",
      agentId: "agent_id",
      segmentId: "segment_id",
      userName: "user_name",
      userEmail: "user_email",
    },
  });
