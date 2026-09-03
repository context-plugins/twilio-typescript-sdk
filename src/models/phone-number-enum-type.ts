import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
