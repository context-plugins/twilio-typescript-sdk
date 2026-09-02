import { s, type Schema } from "../core/index.js";

export type StudioV1FlowEngagementStepStepContext = {
  accountSid?: string | null;
  context?: Record<string, unknown> | null;
  engagementSid?: string | null;
  flowSid?: string | null;
  stepSid?: string | null;
  url?: string | null;
};

export const studioV1FlowEngagementStepStepContextSchema: Schema<StudioV1FlowEngagementStepStepContext> =
  s.object<StudioV1FlowEngagementStepStepContext>({
    accountSid: s.optionalNullable(s.string()),
    context: s.optionalNullable(s.record(s.string(), s.unknown())),
    engagementSid: s.optionalNullable(s.string()),
    flowSid: s.optionalNullable(s.string()),
    stepSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      engagementSid: "engagement_sid",
      flowSid: "flow_sid",
      stepSid: "step_sid",
    },
  });
