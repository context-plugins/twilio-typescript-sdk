import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  messagingV2RcsComplianceCountryUpdatePatchResponseSchema,
  type MessagingV2RcsComplianceCountryUpdatePatchResponse,
} from "./messaging-v2-rcs-compliance-country-update-patch-response.js";

/** The KYC compliance information. This section consists of response to the request launch. */
export type MessagingV2RcsCompliancePatchUpdateResponse = {
  /**
   * The default compliance registration SID (e.g., from CR-Google) that applies to all countries
   * unless overridden within the `countries` array.
   */
  registrationSid: string;
  /** A list of country-specific compliance details. */
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
