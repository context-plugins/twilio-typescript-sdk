import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Business information associated with the application. */
export type BusinessInformation = {
  /** The Compliance Profile SID for the customer-facing business profile. */
  customerFacingProfile: string;
};

export const businessInformationSchema: Schema<BusinessInformation> = s.object<BusinessInformation>({
  customerFacingProfile: s.string(),
  _keysMap: {
    customerFacingProfile: "customer_facing_profile",
  },
});
