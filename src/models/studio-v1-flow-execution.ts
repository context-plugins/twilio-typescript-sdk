import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { executionEnumStatusSchema, type ExecutionEnumStatus } from "./execution-enum-status.js";

export type StudioV1FlowExecution = {
  sid?: string | null;
  accountSid?: string | null;
  flowSid?: string | null;
  contactSid?: string | null;
  contactChannelAddress?: string | null;
  context?: Record<string, unknown> | null;
  status?: ExecutionEnumStatus;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const studioV1FlowExecutionSchema: Schema<StudioV1FlowExecution> = s.object<StudioV1FlowExecution>({
  sid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  flowSid: s.optionalNullable(s.string()),
  contactSid: s.optionalNullable(s.string()),
  contactChannelAddress: s.optionalNullable(s.string()),
  context: s.optionalNullable(s.record(s.string(), s.unknown())),
  status: s.optional(s.lazy(() => executionEnumStatusSchema)),
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
