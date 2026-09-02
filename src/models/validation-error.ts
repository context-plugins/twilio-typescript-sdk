import { s, type EnumSchema } from "../core/index.js";

export const ValidationError = {
  TooShort: "TOO_SHORT",
  TooLong: "TOO_LONG",
  InvalidButPossible: "INVALID_BUT_POSSIBLE",
  InvalidCountryCode: "INVALID_COUNTRY_CODE",
  InvalidLength: "INVALID_LENGTH",
  NotANumber: "NOT_A_NUMBER",
} as const;
export type ValidationError = (typeof ValidationError)[keyof typeof ValidationError] | (string & {});

export const validationErrorSchema: EnumSchema<ValidationError> = s.enumOf<ValidationError>(ValidationError);
