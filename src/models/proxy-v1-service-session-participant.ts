import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProxyV1ServiceSessionParticipant = {
  /** The unique string that we created to identify the Participant resource. */
  sid?: string | null;
  /** The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) resource. */
  sessionSid?: string | null;
  /**
   * The SID of the resource's parent [Service](https://www.twilio.com/docs/proxy/api/service)
   * resource.
   */
  serviceSid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * Participant resource.
   */
  accountSid?: string | null;
  /**
   * The string that you assigned to describe the participant. This value must be 255 characters or
   * fewer. Supports UTF-8 characters. **This value should not have PII.**
   */
  friendlyName?: string | null;
  /**
   * The phone number or channel identifier of the Participant. This value must be 191 characters or
   * fewer. Supports UTF-8 characters.
   */
  identifier?: string | null;
  /**
   * The phone number or short code (masked number) of the participant's partner. The participant
   * will call or message the partner participant at this number.
   */
  proxyIdentifier?: string | null;
  /** The SID of the Proxy Identifier assigned to the Participant. */
  proxyIdentifierSid?: string | null;
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Participant was removed
   * from the session.
   */
  dateDeleted?: Date | null;
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource
   * was created.
   */
  dateCreated?: Date | null;
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource
   * was last updated.
   */
  dateUpdated?: Date | null;
  /** The absolute URL of the Participant resource. */
  url?: string | null;
  /** The URLs to resources related the participant. */
  links?: Record<string, unknown> | null;
};

export const proxyV1ServiceSessionParticipantSchema: Schema<ProxyV1ServiceSessionParticipant> =
  s.object<ProxyV1ServiceSessionParticipant>({
    sid: s.optionalNullable(s.string()),
    sessionSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    identifier: s.optionalNullable(s.string()),
    proxyIdentifier: s.optionalNullable(s.string()),
    proxyIdentifierSid: s.optionalNullable(s.string()),
    dateDeleted: s.optionalNullable(s.dateTime()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      sessionSid: "session_sid",
      serviceSid: "service_sid",
      accountSid: "account_sid",
      friendlyName: "friendly_name",
      proxyIdentifier: "proxy_identifier",
      proxyIdentifierSid: "proxy_identifier_sid",
      dateDeleted: "date_deleted",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
