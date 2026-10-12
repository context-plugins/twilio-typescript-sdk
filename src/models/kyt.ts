import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { outboundCarrierCallingSchema, type OutboundCarrierCalling } from "./outbound-carrier-calling.js";

/**
 * Know Your Traffic (KYT) metrics focused on outbound carrier performance and trust signals for the
 * report period.
 */
export type Kyt = {
  /** KYT metrics for outbound carrier calling. */
  outboundCarrierCalling?: OutboundCarrierCalling;
};

export const kytSchema: Schema<Kyt> = s.object<Kyt>({
  outboundCarrierCalling: s.optional(s.lazy(() => outboundCarrierCallingSchema)),
  _keysMap: {
    outboundCarrierCalling: "outbound_carrier_calling",
  },
});
