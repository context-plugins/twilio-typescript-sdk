import { s, type Schema } from "../core/index.js";
import { outboundCarrierCallingSchema, type OutboundCarrierCalling } from "./outbound-carrier-calling.js";

export type Kyt = {
  outboundCarrierCalling?: OutboundCarrierCalling;
};

export const kytSchema: Schema<Kyt> = s.object<Kyt>({
  outboundCarrierCalling: s.optional(s.lazy(() => outboundCarrierCallingSchema)),
  _keysMap: {
    outboundCarrierCalling: "outbound_carrier_calling",
  },
});
