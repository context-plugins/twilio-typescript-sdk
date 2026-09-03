import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BusinessInformation = {
  customerFacingProfile: string;
};

export const businessInformationSchema: Schema<BusinessInformation> = s.object<BusinessInformation>({
  customerFacingProfile: s.string(),
  _keysMap: {
    customerFacingProfile: "customer_facing_profile",
  },
});
