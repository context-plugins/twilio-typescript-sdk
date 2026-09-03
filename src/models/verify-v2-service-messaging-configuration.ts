import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VerifyV2ServiceMessagingConfiguration = {
  accountSid?: string | null;
  serviceSid?: string | null;
  country?: string | null;
  messagingServiceSid?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
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
