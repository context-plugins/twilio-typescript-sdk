import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Business information associated with the application. */
export type BusinessInformation1 = {
  managingCompanyProfile?: string;
  customerFacingProfile?: string;
  businessWebsite?: string;
  einManagingCompanyProfile?: string;
  einCustomerFacingProfile?: string;
};

export const businessInformation1Schema: Schema<BusinessInformation1> = s.object<BusinessInformation1>({
  managingCompanyProfile: s.optional(s.string()),
  customerFacingProfile: s.optional(s.string()),
  businessWebsite: s.optional(s.string()),
  einManagingCompanyProfile: s.optional(s.string()),
  einCustomerFacingProfile: s.optional(s.string()),
  _keysMap: {
    managingCompanyProfile: "managing_company_profile",
    customerFacingProfile: "customer_facing_profile",
    businessWebsite: "business_website",
    einManagingCompanyProfile: "ein_managing_company_profile",
    einCustomerFacingProfile: "ein_customer_facing_profile",
  },
});
