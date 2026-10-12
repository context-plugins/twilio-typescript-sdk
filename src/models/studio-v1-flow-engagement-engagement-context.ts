import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StudioV1FlowEngagementEngagementContext = {
  /** The SID of the Account. */
  accountSid?: string | null;
  /**
   * As your flow executes, we save the state in what's called the Flow Context. Any data in the
   * flow context can be accessed by your widgets as variables, either in configuration fields or in
   * text areas as variable substitution.
   */
  context?: Record<string, unknown> | null;
  /** The SID of the Engagement. */
  engagementSid?: string | null;
  /** The SID of the Flow. */
  flowSid?: string | null;
  /** The URL of the resource. */
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
