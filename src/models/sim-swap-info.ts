import { s, type Schema } from "../core/index.js";
import { lastSimSwapInfoSchema, type LastSimSwapInfo } from "./last-sim-swap-info.js";

export type SimSwapInfo = {
  lastSimSwap?: LastSimSwapInfo;
  carrierName?: string;
  mobileCountryCode?: string;
  mobileNetworkCode?: string;
  errorCode?: number;
};

export const simSwapInfoSchema: Schema<SimSwapInfo> = s.object<SimSwapInfo>({
  lastSimSwap: s.optional(s.lazy(() => lastSimSwapInfoSchema)),
  carrierName: s.optional(s.string()),
  mobileCountryCode: s.optional(s.string()),
  mobileNetworkCode: s.optional(s.string()),
  errorCode: s.optional(s.number()),
  _keysMap: {
    lastSimSwap: "last_sim_swap",
    carrierName: "carrier_name",
    mobileCountryCode: "mobile_country_code",
    mobileNetworkCode: "mobile_network_code",
    errorCode: "error_code",
  },
});
