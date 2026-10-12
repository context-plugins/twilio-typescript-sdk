import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { callEnumStatusSchema, type CallEnumStatus } from "./call-enum-status.js";

export type ApiV2010AccountCall = {
  /** The unique string that we created to identify this Call resource. */
  sid?: string | null;
  /**
   * The date and time in UTC that this resource was created specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated?: string | null;
  /**
   * The date and time in UTC that this resource was last updated, specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated?: string | null;
  /** The SID that identifies the call that created this leg. */
  parentCallSid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Call
   * resource.
   */
  accountSid?: string | null;
  /**
   * The phone number, SIP address, Client identifier or SIM SID that received this call. Phone
   * numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g.,
   * +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are
   * formatted `client:name`. SIM SIDs are formatted as `sim:sid`.
   */
  to?: string | null;
  /**
   * The phone number, SIP address or Client identifier that received this call. Formatted for
   * display. Non-North American phone numbers are in
   * [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +442071838750).
   */
  toFormatted?: string | null;
  /**
   * The phone number, SIP address, Client identifier or SIM SID that made this call. Phone numbers
   * are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format (e.g., +16175551212). SIP
   * addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`.
   * SIM SIDs are formatted as `sim:sid`.
   */
  from?: string | null;
  /**
   * The calling phone number, SIP address, or Client identifier formatted for display. Non-North
   * American phone numbers are in [E.164](https://www.twilio.com/docs/glossary/what-e164) format
   * (e.g., +442071838750).
   */
  fromFormatted?: string | null;
  /**
   * If the call was inbound, this is the SID of the IncomingPhoneNumber resource that received the
   * call. If the call was outbound, it is the SID of the OutgoingCallerId resource from which the
   * call was placed.
   */
  phoneNumberSid?: string | null;
  /**
   * The status of this call. Can be: `queued`, `ringing`, `in-progress`, `canceled`, `completed`,
   * `failed`, `busy` or `no-answer`. See [Call Status
   * Values](https://www.twilio.com/docs/voice/api/call-resource#call-status-values) below for more
   * information.
   */
  status?: CallEnumStatus;
  /**
   * The start time of the call, given as UTC in [RFC
   * 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
   * Empty if the call has not yet been dialed.
   */
  startTime?: string | null;
  /**
   * The time the call ended, given as UTC in [RFC
   * 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
   * Empty if the call did not complete successfully.
   */
  endTime?: string | null;
  /**
   * The length of the call in seconds. This value is empty for busy, failed, unanswered, or ongoing
   * calls.
   */
  duration?: string | null;
  /**
   * The charge for this call, in the currency associated with the account. Populated after the call
   * is completed. May not be immediately available. The price associated with a call only reflects
   * the charge for connectivity. Charges for other call-related features such as Answering Machine
   * Detection, Text-To-Speech, and SIP REFER are not included in this value.
   */
  price?: string | null;
  /**
   * The currency in which `Price` is measured, in [ISO
   * 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format (e.g., `USD`, `EUR`,
   * `JPY`). Always capitalized for calls.
   */
  priceUnit?: string | null;
  /**
   * A string describing the direction of the call. Can be: `inbound` for inbound calls,
   * `outbound-api` for calls initiated via the REST API or `outbound-dial` for calls initiated by a
   * `<Dial>` verb. Using [Elastic SIP Trunking](https://www.twilio.com/docs/sip-trunking), the
   * values can be [`trunking-terminating`](https://www.twilio.com/docs/sip-trunking#termination)
   * for outgoing calls from your communications infrastructure to the PSTN or
   * [`trunking-originating`](https://www.twilio.com/docs/sip-trunking#origination) for incoming
   * calls to your communications infrastructure from the PSTN.
   */
  direction?: string | null;
  /**
   * Either `human` or `machine` if this call was initiated with answering machine detection. Empty
   * otherwise.
   */
  answeredBy?: string | null;
  /** The API version used to create the call. */
  apiVersion?: string | null;
  /**
   * The forwarding phone number if this call was an incoming call forwarded from another number
   * (depends on carrier supporting forwarding). Otherwise, empty.
   */
  forwardedFrom?: string | null;
  /**
   * The Group SID associated with this call. If no Group is associated with the call, the field is
   * empty.
   */
  groupSid?: string | null;
  /**
   * The caller's name if this call was an incoming call to a phone number with caller ID Lookup
   * enabled. Otherwise, empty.
   */
  callerName?: string | null;
  /** The wait time in milliseconds before the call is placed. */
  queueTime?: string | null;
  /**
   * The unique identifier of the trunk resource that was used for this call. The field is empty if
   * the call was not made using a SIP trunk or if the call is not terminated.
   */
  trunkSid?: string | null;
  /** The URI of this resource, relative to `https://api.twilio.com`. */
  uri?: string | null;
  /**
   * A list of subresources available to this call, identified by their URIs relative to
   * `https://api.twilio.com`.
   */
  subresourceUris?: Record<string, unknown> | null;
};

export const apiV2010AccountCallSchema: Schema<ApiV2010AccountCall> = s.object<ApiV2010AccountCall>({
  sid: s.optionalNullable(s.string()),
  dateCreated: s.optionalNullable(s.string()),
  dateUpdated: s.optionalNullable(s.string()),
  parentCallSid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  to: s.optionalNullable(s.string()),
  toFormatted: s.optionalNullable(s.string()),
  from: s.optionalNullable(s.string()),
  fromFormatted: s.optionalNullable(s.string()),
  phoneNumberSid: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => callEnumStatusSchema)),
  startTime: s.optionalNullable(s.string()),
  endTime: s.optionalNullable(s.string()),
  duration: s.optionalNullable(s.string()),
  price: s.optionalNullable(s.string()),
  priceUnit: s.optionalNullable(s.string()),
  direction: s.optionalNullable(s.string()),
  answeredBy: s.optionalNullable(s.string()),
  apiVersion: s.optionalNullable(s.string()),
  forwardedFrom: s.optionalNullable(s.string()),
  groupSid: s.optionalNullable(s.string()),
  callerName: s.optionalNullable(s.string()),
  queueTime: s.optionalNullable(s.string()),
  trunkSid: s.optionalNullable(s.string()),
  uri: s.optionalNullable(s.string()),
  subresourceUris: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    dateCreated: "date_created",
    dateUpdated: "date_updated",
    parentCallSid: "parent_call_sid",
    accountSid: "account_sid",
    toFormatted: "to_formatted",
    fromFormatted: "from_formatted",
    phoneNumberSid: "phone_number_sid",
    startTime: "start_time",
    endTime: "end_time",
    priceUnit: "price_unit",
    answeredBy: "answered_by",
    apiVersion: "api_version",
    forwardedFrom: "forwarded_from",
    groupSid: "group_sid",
    callerName: "caller_name",
    queueTime: "queue_time",
    trunkSid: "trunk_sid",
    subresourceUris: "subresource_uris",
  },
});
