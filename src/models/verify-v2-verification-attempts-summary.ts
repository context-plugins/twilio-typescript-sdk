import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VerifyV2VerificationAttemptsSummary = {
  /** Total of attempts made according to the provided filters @default 0 */
  totalAttempts?: number;
  /**
   * Total of attempts made that were confirmed by the end user, according to the provided filters.
   *
   * @default 0
   */
  totalConverted?: number;
  /**
   * Total of attempts made that were not confirmed by the end user, according to the provided
   * filters.
   *
   * @default 0
   */
  totalUnconverted?: number;
  /**
   * Percentage of the confirmed messages over the total, defined by
   * (total_converted/total_attempts)*100.
   */
  conversionRatePercentage?: string | null;
  url?: string | null;
};

export const verifyV2VerificationAttemptsSummarySchema: Schema<VerifyV2VerificationAttemptsSummary> =
  s.object<VerifyV2VerificationAttemptsSummary>({
    totalAttempts: s.defaulted(s.int(), 0),
    totalConverted: s.defaulted(s.int(), 0),
    totalUnconverted: s.defaulted(s.int(), 0),
    conversionRatePercentage: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      totalAttempts: "total_attempts",
      totalConverted: "total_converted",
      totalUnconverted: "total_unconverted",
      conversionRatePercentage: "conversion_rate_percentage",
    },
  });
