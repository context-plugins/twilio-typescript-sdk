import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  messagingV2RcsComplianceCountryUpdatePatchResponseSchema,
  type MessagingV2RcsComplianceCountryUpdatePatchResponse,
} from "./messaging-v2-rcs-compliance-country-update-patch-response.js";

export type MessagingV2RcsCompliancePatchUpdateResponse = {
  registrationSid: string;
  countries?: MessagingV2RcsComplianceCountryUpdatePatchResponse[];
};

export const messagingV2RcsCompliancePatchUpdateResponseSchema: Schema<MessagingV2RcsCompliancePatchUpdateResponse> =
  s.object<MessagingV2RcsCompliancePatchUpdateResponse>({
    registrationSid: s.string(),
    countries: s.optional(s.array(s.lazy(() => messagingV2RcsComplianceCountryUpdatePatchResponseSchema))),
    _keysMap: {
      registrationSid: "registration_sid",
    },
  });
