import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VerifyV2ServiceMessagingConfiguration = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Service
   * resource.
   */
  accountSid?: string | null;
  /**
   * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) that the resource is
   * associated with.
   */
  serviceSid?: string | null;
  /**
   * The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country
   * this configuration will be applied to. If this is a global configuration, Country will take the
   * value `all`.
   */
  country?: string | null;
  /**
   * The SID of the [Messaging Service](https://www.twilio.com/docs/messaging/api/service-resource)
   * to be used to send SMS to the country of this configuration.
   */
  messagingServiceSid?: string | null;
  /**
   * The date and time in GMT when the resource was created specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT when the resource was last updated specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated?: Date | null;
  /** The URL of this resource. */
  url?: string | null;
};

export const verifyV2ServiceMessagingConfigurationSchema: Schema<VerifyV2ServiceMessagingConfiguration> =
  s.object<VerifyV2ServiceMessagingConfiguration>({
    accountSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    country: s.optionalNullable(s.string()),
    messagingServiceSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      serviceSid: "service_sid",
      messagingServiceSid: "messaging_service_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
