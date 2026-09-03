import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VerificationAttemptEnumConversionStatus = {
  Converted: "converted",
  Unconverted: "unconverted",
} as const;
export type VerificationAttemptEnumConversionStatus =
  | (typeof VerificationAttemptEnumConversionStatus)[keyof typeof VerificationAttemptEnumConversionStatus]
  | (string & {});

export const verificationAttemptEnumConversionStatusSchema: EnumSchema<VerificationAttemptEnumConversionStatus> =
  s.enumOf<VerificationAttemptEnumConversionStatus>(VerificationAttemptEnumConversionStatus);
