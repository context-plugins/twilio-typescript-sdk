import { s, type Schema } from "../core/index.js";

export type TwilioLocation = {
  latitude: number;
  longitude: number;
  label?: string;
  id?: string;
  address?: string;
};

export const twilioLocationSchema: Schema<TwilioLocation> = s.object<TwilioLocation>({
  latitude: s.number(),
  longitude: s.number(),
  label: s.optional(s.string()),
  id: s.optional(s.string()),
  address: s.optional(s.string()),
});
