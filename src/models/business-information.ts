import { s, type Schema } from "../core/index.js";

export type BusinessInformation = {
  customerFacingProfile: string;
};

export const businessInformationSchema: Schema<BusinessInformation> = s.object<BusinessInformation>({
  customerFacingProfile: s.string(),
  _keysMap: {
    customerFacingProfile: "customer_facing_profile",
  },
});
