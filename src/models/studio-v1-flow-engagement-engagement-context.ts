import { s, type Schema } from "../core/index.js";

export type StudioV1FlowEngagementEngagementContext = {
  accountSid?: string | null;
  context?: Record<string, unknown> | null;
  engagementSid?: string | null;
  flowSid?: string | null;
  url?: string | null;
};

export const studioV1FlowEngagementEngagementContextSchema: Schema<StudioV1FlowEngagementEngagementContext> =
  s.object<StudioV1FlowEngagementEngagementContext>({
    accountSid: s.optionalNullable(s.string()),
    context: s.optionalNullable(s.record(s.string(), s.unknown())),
    engagementSid: s.optionalNullable(s.string()),
    flowSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      engagementSid: "engagement_sid",
      flowSid: "flow_sid",
    },
  });
