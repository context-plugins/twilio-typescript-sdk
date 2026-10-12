import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Contains reasons why a phone number is invalid. Possible values: TOO_SHORT, TOO_LONG,
 * INVALID_BUT_POSSIBLE, INVALID_COUNTRY_CODE, INVALID_LENGTH, NOT_A_NUMBER.
 */
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
