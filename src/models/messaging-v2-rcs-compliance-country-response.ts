import { s, type Schema } from "../core/index.js";
import { messagingV2RcsCarrierSchema, type MessagingV2RcsCarrier } from "./messaging-v2-rcs-carrier.js";
import {
  messagingV2RcsCountryStatusSchema,
  type MessagingV2RcsCountryStatus,
} from "./messaging-v2-rcs-country-status.js";

export type MessagingV2RcsComplianceCountryResponse = {
  country: string;
  registrationSid?: string;
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
