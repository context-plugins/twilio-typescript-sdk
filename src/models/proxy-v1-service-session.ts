import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sessionEnumModeSchema, type SessionEnumMode } from "./session-enum-mode.js";
import { sessionEnumStatusSchema, type SessionEnumStatus } from "./session-enum-status.js";

export type ProxyV1ServiceSession = {
  /** The unique string that we created to identify the Session resource. */
  sid?: string | null;
  /**
   * The SID of the [Service](https://www.twilio.com/docs/proxy/api/service) the session is
   * associated with.
   */
  serviceSid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Session
   * resource.
   */
  accountSid?: string | null;
  /** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session started. */
  dateStarted?: Date | null;
  /** The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session ended. */
  dateEnded?: Date | null;
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session last had an
   * interaction.
   */
  dateLastInteraction?: Date | null;
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date when the Session should expire. If
   * this is value is present, it overrides the `ttl` value.
   */
  dateExpiry?: Date | null;
  /**
   * An application-defined string that uniquely identifies the resource. This value must be 191
   * characters or fewer in length and be unique. Supports UTF-8 characters. **This value should not
   * have PII.**
   */
  uniqueName?: string | null;
  /** The status of the Session. Can be: `open`, `in-progress`, `closed`, `failed`, or `unknown`. */
  status?: SessionEnumStatus;
  /** The reason the Session ended. */
  closedReason?: string | null;
  /**
   * The time, in seconds, when the session will expire. The time is measured from the last Session
   * create or the Session's last Interaction.
   *
   * @default 0
   */
  ttl?: number;
  /** The Mode of the Session. Can be: `message-only`, `voice-only`, or `voice-and-message`. */
  mode?: SessionEnumMode;
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
  /** The absolute URL of the Session resource. */
  url?: string | null;
  /** The URLs of resources related to the Session. */
  links?: Record<string, unknown> | null;
};

export const proxyV1ServiceSessionSchema: Schema<ProxyV1ServiceSession> = s.object<ProxyV1ServiceSession>({
  sid: s.optionalNullable(s.string()),
  serviceSid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  dateStarted: s.optionalNullable(s.dateTime()),
  dateEnded: s.optionalNullable(s.dateTime()),
  dateLastInteraction: s.optionalNullable(s.dateTime()),
  dateExpiry: s.optionalNullable(s.dateTime()),
  uniqueName: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => sessionEnumStatusSchema)),
  closedReason: s.optionalNullable(s.string()),
  ttl: s.defaulted(s.int(), 0),
  mode: s.optional(s.lazy(() => sessionEnumModeSchema)),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  url: s.optionalNullable(s.string()),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    serviceSid: "service_sid",
    accountSid: "account_sid",
    dateStarted: "date_started",
    dateEnded: "date_ended",
    dateLastInteraction: "date_last_interaction",
    dateExpiry: "date_expiry",
    uniqueName: "unique_name",
    closedReason: "closed_reason",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
  },
});
