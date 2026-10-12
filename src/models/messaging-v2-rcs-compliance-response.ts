import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  messagingV2RcsComplianceCountryResponseSchema,
  type MessagingV2RcsComplianceCountryResponse,
} from "./messaging-v2-rcs-compliance-country-response.js";

/** The KYC compliance information. This section consists of response to the request launch. */
export type MessagingV2RcsComplianceResponse = {
  /**
   * The default compliance registration SID (e.g., from CR-Google) that applies to all countries
   * unless overridden in the `countries` array.
   */
  registrationSid: string;
  /** A list of country-specific compliance details. */
  countries?: MessagingV2RcsComplianceCountryResponse[];
};

export const messagingV2RcsComplianceResponseSchema: Schema<MessagingV2RcsComplianceResponse> =
  s.object<MessagingV2RcsComplianceResponse>({
    registrationSid: s.string(),
    countries: s.optional(s.array(s.lazy(() => messagingV2RcsComplianceCountryResponseSchema))),
    _keysMap: {
      registrationSid: "registration_sid",
    },
  });
