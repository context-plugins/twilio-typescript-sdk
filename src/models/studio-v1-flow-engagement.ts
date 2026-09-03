import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { engagementEnumStatusSchema, type EngagementEnumStatus } from "./engagement-enum-status.js";

export type StudioV1FlowEngagement = {
  sid?: string | null;
  accountSid?: string | null;
  flowSid?: string | null;
  contactSid?: string | null;
  contactChannelAddress?: string | null;
  context?: Record<string, unknown> | null;
  status?: EngagementEnumStatus;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const studioV1FlowEngagementSchema: Schema<StudioV1FlowEngagement> = s.object<StudioV1FlowEngagement>({
  sid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  flowSid: s.optionalNullable(s.string()),
  contactSid: s.optionalNullable(s.string()),
  contactChannelAddress: s.optionalNullable(s.string()),
  context: s.optionalNullable(s.record(s.string(), s.unknown())),
  status: s.optional(s.lazy(() => engagementEnumStatusSchema)),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  url: s.optionalNullable(s.string()),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    accountSid: "account_sid",
    flowSid: "flow_sid",
    contactSid: "contact_sid",
    contactChannelAddress: "contact_channel_address",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
  },
});
