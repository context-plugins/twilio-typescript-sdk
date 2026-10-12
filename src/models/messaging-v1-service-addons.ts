import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV1ServiceAddons = {
  /** The unique string that we created to identify the add on resource. */
  sid?: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the add on
   * resource.
   */
  accountSid?: string | null;
  /**
   * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) the resource
   * is associated with.
   */
  serviceSid?: string | null;
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
  /** The SID that identifies the add on type. */
  addOnTypeSid?: string | null;
  /** The config of the add on in JSON string format. */
  addOnConfig?: string | null;
  /** The absolute URL of the add on resource. */
  url?: string | null;
};

export const messagingV1ServiceAddonsSchema: Schema<MessagingV1ServiceAddons> =
  s.object<MessagingV1ServiceAddons>({
    sid: s.optional(s.string()),
    accountSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    addOnTypeSid: s.optionalNullable(s.string()),
    addOnConfig: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      serviceSid: "service_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      addOnTypeSid: "add_on_type_sid",
      addOnConfig: "add_on_config",
    },
  });
