import { s, type Schema } from "../core/index.js";

export type FlexV1InsightsAssessmentsComment = {
  accountSid?: string | null;
  assessmentSid?: string | null;
  comment?: Record<string, unknown> | null;
  offset?: string | null;
  report?: boolean | null;
  weight?: string | null;
  agentId?: string | null;
  segmentId?: string | null;
  userName?: string | null;
  userEmail?: string | null;
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
