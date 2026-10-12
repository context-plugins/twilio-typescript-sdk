import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { engagementEnumStatusSchema, type EngagementEnumStatus } from "./engagement-enum-status.js";

export type StudioV2FlowExecution = {
  /** The unique string that we created to identify the Execution resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * Execution resource.
   */
  accountSid?: string | null;
  /** The SID of the Flow. */
  flowSid?: string | null;
  /**
   * The phone number, SIP address or Client identifier that triggered the Execution. Phone numbers
   * are in E.164 format (e.g. +16175551212). SIP addresses are formatted as `name@company.com`.
   * Client identifiers are formatted `client:name`.
   */
  contactChannelAddress?: string | null;
  /** The SID of the Contact. */
  contactSid?: string | null;
  /** The Flow version number at the time of Execution creation. */
  flowVersion?: number | null;
  /**
   * The current state of the Flow's Execution. As a flow executes, we save its state in this
   * context. We save data that your widgets can access as variables in configuration fields or in
   * text areas as variable substitution.
   */
  context?: Record<string, unknown> | null;
  /** The status of the Execution. Can be: `active` or `ended`. */
  status?: EngagementEnumStatus;
  /**
   * The date and time in GMT when the resource was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated?: Date | null;
  /**
   * The SID or identifier that triggered this Execution. For example, a Call SID if triggered by an
   * incoming call, a Message SID if triggered by an incoming message, a Request SID if triggered by
   * a REST API request, and so on.
   */
  initiatedBy?: string | null;
  /** The absolute URL of the resource. */
  url?: string | null;
  /** The URLs of nested resources. */
  links?: Record<string, unknown> | null;
};

export const studioV2FlowExecutionSchema: Schema<StudioV2FlowExecution> = s.object<StudioV2FlowExecution>({
  sid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  flowSid: s.optionalNullable(s.string()),
  contactChannelAddress: s.optionalNullable(s.string()),
  contactSid: s.optionalNullable(s.string()),
  flowVersion: s.optionalNullable(s.int()),
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
