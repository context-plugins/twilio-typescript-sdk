import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * twilio/location type contains a location pin and an optional label, which can be used to enhance
 * delivery notifications or connect recipients to physical experiences you offer.
 */
export type TwilioLocation = {
  latitude: number;
  longitude: number;
  label?: string;
  id?: string;
  address?: string;
};

export const twilioLocationSchema: Schema<TwilioLocation> = s.object<TwilioLocation>({
  latitude: s.float64(),
  longitude: s.float64(),
  label: s.optional(s.string()),
  id: s.optional(s.string()),
  address: s.optional(s.string()),
});
