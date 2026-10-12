import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV1InsightsAssessments = {
  /** The unique SID identifier of the Account. */
  accountSid?: string | null;
  /** The SID of the assessment */
  assessmentSid?: string | null;
  /** Offset of the conversation */
  offset?: string | null;
  /** The flag indicating if this assessment is part of report */
  report?: boolean | null;
  /** The weightage given to this comment */
  weight?: string | null;
  /** The id of the Agent */
  agentId?: string | null;
  /** Segment Id of conversation */
  segmentId?: string | null;
  /** The name of the user. */
  userName?: string | null;
  /** The email id of the user. */
  userEmail?: string | null;
  /** The answer text selected by user */
  answerText?: string | null;
  /** The id of the answer selected by user */
  answerId?: string | null;
  /** Assessment Details associated with an assessment */
  assessment?: Record<string, unknown> | null;
  timestamp?: string | null;
  url?: string | null;
};

export const flexV1InsightsAssessmentsSchema: Schema<FlexV1InsightsAssessments> =
  s.object<FlexV1InsightsAssessments>({
    accountSid: s.optionalNullable(s.string()),
    assessmentSid: s.optionalNullable(s.string()),
    offset: s.optionalNullable(s.string()),
    report: s.optionalNullable(s.boolean()),
    weight: s.optionalNullable(s.string()),
    agentId: s.optionalNullable(s.string()),
    segmentId: s.optionalNullable(s.string()),
    userName: s.optionalNullable(s.string()),
    userEmail: s.optionalNullable(s.string()),
    answerText: s.optionalNullable(s.string()),
    answerId: s.optionalNullable(s.string()),
    assessment: s.optionalNullable(s.record(s.string(), s.unknown())),
    timestamp: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      assessmentSid: "assessment_sid",
      agentId: "agent_id",
      segmentId: "segment_id",
      userName: "user_name",
      userEmail: "user_email",
      answerText: "answer_text",
      answerId: "answer_id",
    },
  });
