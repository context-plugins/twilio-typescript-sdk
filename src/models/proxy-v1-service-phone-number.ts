import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capabilitiesSchema, type Capabilities } from "./capabilities.js";

export type ProxyV1ServicePhoneNumber = {
  sid?: string | null;
  accountSid?: string | null;
  serviceSid?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  phoneNumber?: string | null;
  friendlyName?: string | null;
  isoCountry?: string | null;
  capabilities?: Capabilities | null;
  url?: string | null;
  isReserved?: boolean | null;
  inUse?: number;
};

export const proxyV1ServicePhoneNumberSchema: Schema<ProxyV1ServicePhoneNumber> =
  s.object<ProxyV1ServicePhoneNumber>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    phoneNumber: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    isoCountry: s.optionalNullable(s.string()),
    capabilities: s.optionalNullable(s.lazy(() => capabilitiesSchema)),
    url: s.optionalNullable(s.string()),
    isReserved: s.optionalNullable(s.boolean()),
    inUse: s.optional(s.number()),
    _keysMap: {
      accountSid: "account_sid",
      serviceSid: "service_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      phoneNumber: "phone_number",
      friendlyName: "friendly_name",
      isoCountry: "iso_country",
      isReserved: "is_reserved",
      inUse: "in_use",
    },
  });
