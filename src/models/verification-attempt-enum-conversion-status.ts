import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A string specifying the conversion status of the verification. A conversion happens when the user
 * is able to provide the correct code. Possible values are `CONVERTED` and `UNCONVERTED`.
 */
export const VerificationAttemptEnumConversionStatus = {
  Converted: "converted",
  Unconverted: "unconverted",
} as const;
export type VerificationAttemptEnumConversionStatus =
  | (typeof VerificationAttemptEnumConversionStatus)[keyof typeof VerificationAttemptEnumConversionStatus]
  | (string & {});

export const verificationAttemptEnumConversionStatusSchema: EnumSchema<VerificationAttemptEnumConversionStatus> =
  s.enumOf<VerificationAttemptEnumConversionStatus>(VerificationAttemptEnumConversionStatus);
