import { s, type EnumSchema } from "../core/index.js";

export const PhoneNumberEnumType = {
  Landline: "landline",
  Mobile: "mobile",
  Voip: "voip",
} as const;
export type PhoneNumberEnumType =
  | (typeof PhoneNumberEnumType)[keyof typeof PhoneNumberEnumType]
  | (string & {});

export const phoneNumberEnumTypeSchema: EnumSchema<PhoneNumberEnumType> =
  s.enumOf<PhoneNumberEnumType>(PhoneNumberEnumType);
