import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { engagementEnumStatusSchema, type EngagementEnumStatus } from "./engagement-enum-status.js";

export type StudioV1FlowEngagement = {
  /** The unique string that we created to identify the Engagement resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * Engagement resource.
   */
  accountSid?: string | null;
  /** The SID of the Flow. */
  flowSid?: string | null;
  /** The SID of the Contact. */
  contactSid?: string | null;
  /**
   * The phone number, SIP address or Client identifier that triggered this Engagement. Phone
   * numbers are in E.164 format (+16175551212). SIP addresses are formatted as `name@company.com`.
   * Client identifiers are formatted `client:name`.
   */
  contactChannelAddress?: string | null;
  /**
   * The current state of the execution flow. As your flow executes, we save the state in a flow
   * context. Your widgets can access the data in the flow context as variables, either in
   * configuration fields or in text areas as variable substitution.
   */
  context?: Record<string, unknown> | null;
  /** The status of the Engagement. Can be: `active` or `ended`. */
  status?: EngagementEnumStatus;
  /**
   * The date and time in GMT when the Engagement was created in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT when the Engagement was updated in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated?: Date | null;
  /** The absolute URL of the resource. */
  url?: string | null;
  /** The URLs of the Engagement's nested resources. */
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
