import { s, type Schema } from "../core/index.js";

export type LookupsV1PhoneNumber = {
  callerName?: Record<string, unknown> | null;
  countryCode?: string | null;
  phoneNumber?: string | null;
  nationalFormat?: string | null;
  carrier?: Record<string, unknown> | null;
  addOns?: Record<string, unknown> | null;
  url?: string | null;
};

export const lookupsV1PhoneNumberSchema: Schema<LookupsV1PhoneNumber> = s.object<LookupsV1PhoneNumber>({
  callerName: s.optionalNullable(s.record(s.string(), s.unknown())),
  countryCode: s.optionalNullable(s.string()),
  phoneNumber: s.optionalNullable(s.string()),
  nationalFormat: s.optionalNullable(s.string()),
  carrier: s.optionalNullable(s.record(s.string(), s.unknown())),
  addOns: s.optionalNullable(s.record(s.string(), s.unknown())),
  url: s.optionalNullable(s.string()),
  _keysMap: {
    callerName: "caller_name",
    countryCode: "country_code",
    phoneNumber: "phone_number",
    nationalFormat: "national_format",
    addOns: "add_ons",
  },
});
