import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV1InsightsAssessments = {
  accountSid?: string | null;
  assessmentSid?: string | null;
  offset?: string | null;
  report?: boolean | null;
  weight?: string | null;
  agentId?: string | null;
  segmentId?: string | null;
  userName?: string | null;
  userEmail?: string | null;
  answerText?: string | null;
  answerId?: string | null;
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
