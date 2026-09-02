import { s, type Schema } from "../core/index.js";

export type StudioV1FlowEngagementStep = {
  sid?: string | null;
  accountSid?: string | null;
  flowSid?: string | null;
  engagementSid?: string | null;
  name?: string | null;
  context?: Record<string, unknown> | null;
  parentStepSid?: string | null;
  transitionedFrom?: string | null;
  transitionedTo?: string | null;
  type?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const studioV1FlowEngagementStepSchema: Schema<StudioV1FlowEngagementStep> =
  s.object<StudioV1FlowEngagementStep>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    flowSid: s.optionalNullable(s.string()),
    engagementSid: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
    context: s.optionalNullable(s.record(s.string(), s.unknown())),
    parentStepSid: s.optionalNullable(s.string()),
    transitionedFrom: s.optionalNullable(s.string()),
    transitionedTo: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      accountSid: "account_sid",
      flowSid: "flow_sid",
      engagementSid: "engagement_sid",
      parentStepSid: "parent_step_sid",
      transitionedFrom: "transitioned_from",
      transitionedTo: "transitioned_to",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
