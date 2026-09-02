import { s, type Schema } from "../core/index.js";
import { engagementEnumStatusSchema, type EngagementEnumStatus } from "./engagement-enum-status.js";

export type StudioV2FlowExecution = {
  sid?: string | null;
  accountSid?: string | null;
  flowSid?: string | null;
  contactChannelAddress?: string | null;
  contactSid?: string | null;
  flowVersion?: number | null;
  context?: Record<string, unknown> | null;
  status?: EngagementEnumStatus;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  initiatedBy?: string | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const studioV2FlowExecutionSchema: Schema<StudioV2FlowExecution> = s.object<StudioV2FlowExecution>({
  sid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  flowSid: s.optionalNullable(s.string()),
  contactChannelAddress: s.optionalNullable(s.string()),
  contactSid: s.optionalNullable(s.string()),
  flowVersion: s.optionalNullable(s.number()),
  context: s.optionalNullable(s.record(s.string(), s.unknown())),
  status: s.optional(s.lazy(() => engagementEnumStatusSchema)),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  initiatedBy: s.optionalNullable(s.string()),
  url: s.optionalNullable(s.string()),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    accountSid: "account_sid",
    flowSid: "flow_sid",
    contactChannelAddress: "contact_channel_address",
    contactSid: "contact_sid",
    flowVersion: "flow_version",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
    initiatedBy: "initiated_by",
  },
});
