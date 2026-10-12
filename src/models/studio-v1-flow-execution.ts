import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { executionEnumStatusSchema, type ExecutionEnumStatus } from "./execution-enum-status.js";

export type StudioV1FlowExecution = {
  /** The unique string that we created to identify the Execution resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * Execution resource.
   */
  accountSid?: string | null;
  /** The SID of the Flow. */
  flowSid?: string | null;
  /** The SID of the Contact. */
  contactSid?: string | null;
  /**
   * The phone number, SIP address or Client identifier that triggered the Execution. Phone numbers
   * are in E.164 format (e.g. +16175551212). SIP addresses are formatted as `name@company.com`.
   * Client identifiers are formatted `client:name`.
   */
  contactChannelAddress?: string | null;
  /**
   * The current state of the Flow's Execution. As a flow executes, we save its state in this
   * context. We save data that your widgets can access as variables in configuration fields or in
   * text areas as variable substitution.
   */
  context?: Record<string, unknown> | null;
  /** The status of the Execution. Can be: `active` or `ended`. */
  status?: ExecutionEnumStatus;
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
  /** The absolute URL of the resource. */
  url?: string | null;
  /** The URLs of nested resources. */
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
