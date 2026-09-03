import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  messagingV2RcsCountryStatusSchema,
  type MessagingV2RcsCountryStatus,
} from "./messaging-v2-rcs-country-status.js";

export type MessagingV2RcsComplianceCountryUpdatePatchResponse = {
  country: string;
  registrationSid?: string;
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
