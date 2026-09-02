import { s, type Schema } from "../core/index.js";

export type LineTypeIntelligenceInfo = {
  mobileCountryCode?: string;
  mobileNetworkCode?: string;
  carrierName?: string;
  type?: string;
  errorCode?: number;
};

export const lineTypeIntelligenceInfoSchema: Schema<LineTypeIntelligenceInfo> =
  s.object<LineTypeIntelligenceInfo>({
    mobileCountryCode: s.optional(s.string()),
    mobileNetworkCode: s.optional(s.string()),
    carrierName: s.optional(s.string()),
    type: s.optional(s.string()),
    errorCode: s.optional(s.number()),
    _keysMap: {
      mobileCountryCode: "mobile_country_code",
      mobileNetworkCode: "mobile_network_code",
      carrierName: "carrier_name",
      errorCode: "error_code",
    },
  });
