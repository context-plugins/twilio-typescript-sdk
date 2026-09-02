import { s, type Schema } from "../core/index.js";

export type VerifyV2VerificationAttemptsSummary = {
  totalAttempts?: number;
  totalConverted?: number;
  totalUnconverted?: number;
  conversionRatePercentage?: string | null;
  url?: string | null;
};

export const verifyV2VerificationAttemptsSummarySchema: Schema<VerifyV2VerificationAttemptsSummary> =
  s.object<VerifyV2VerificationAttemptsSummary>({
    totalAttempts: s.optional(s.number()),
    totalConverted: s.optional(s.number()),
    totalUnconverted: s.optional(s.number()),
    conversionRatePercentage: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      totalAttempts: "total_attempts",
      totalConverted: "total_converted",
      totalUnconverted: "total_unconverted",
      conversionRatePercentage: "conversion_rate_percentage",
    },
  });
