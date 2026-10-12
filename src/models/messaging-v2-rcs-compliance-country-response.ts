import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messagingV2RcsCarrierSchema, type MessagingV2RcsCarrier } from "./messaging-v2-rcs-carrier.js";
import {
  messagingV2RcsCountryStatusSchema,
  type MessagingV2RcsCountryStatus,
} from "./messaging-v2-rcs-country-status.js";

export type MessagingV2RcsComplianceCountryResponse = {
  /** The ISO 3166-1 alpha-2 country code. */
  country: string;
  /**
   * The default compliance registration SID (e.g., from CR-Google) that applies to all countries
   * unless overridden in the `countries` array.
   */
  registrationSid?: string;
  /** The country-level status. Based on the aggregation of the carrier-level status. */
  status?: MessagingV2RcsCountryStatus;
  carriers?: MessagingV2RcsCarrier[];
};

export const messagingV2RcsComplianceCountryResponseSchema: Schema<MessagingV2RcsComplianceCountryResponse> =
  s.object<MessagingV2RcsComplianceCountryResponse>({
    country: s.string(),
    registrationSid: s.optional(s.string()),
    status: s.optional(s.lazy(() => messagingV2RcsCountryStatusSchema)),
    carriers: s.optional(s.array(s.lazy(() => messagingV2RcsCarrierSchema))),
    _keysMap: {
      registrationSid: "registration_sid",
    },
  });
