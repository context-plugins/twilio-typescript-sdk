import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  messagingV2RcsCountryStatusSchema,
  type MessagingV2RcsCountryStatus,
} from "./messaging-v2-rcs-country-status.js";

export type MessagingV2RcsComplianceCountryUpdatePatchResponse = {
  /** The ISO 3166-1 alpha-2 country code. */
  country: string;
  /**
   * The default compliance registration SID (e.g., from CR-Google) that applies to all countries
   * unless overridden in the `countries` array.
   */
  registrationSid?: string;
  /** The country-level status. Based on the aggregation of the carrier-level status. */
  status?: MessagingV2RcsCountryStatus;
};

export const messagingV2RcsComplianceCountryUpdatePatchResponseSchema: Schema<MessagingV2RcsComplianceCountryUpdatePatchResponse> =
  s.object<MessagingV2RcsComplianceCountryUpdatePatchResponse>({
    country: s.string(),
    registrationSid: s.optional(s.string()),
    status: s.optional(s.lazy(() => messagingV2RcsCountryStatusSchema)),
    _keysMap: {
      registrationSid: "registration_sid",
    },
  });
