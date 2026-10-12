import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The set of Boolean properties that indicate whether a phone number can receive calls or messages.
 * Capabilities are: `Voice`, `SMS`, and `MMS` and each capability can be: `true` or `false`., A
 * mapping of capabilities this hosted phone number will have enabled on Twilio's platform., Set of
 * booleans describing the capabilities hosted on Twilio's platform. SMS is currently only
 * supported., The capabilities of the phone number.
 */
export type Capabilities = {
  mms?: boolean;
  sms?: boolean;
  voice?: boolean;
  fax?: boolean;
};

export const capabilitiesSchema: Schema<Capabilities> = s.object<Capabilities>({
  mms: s.optional(s.boolean()),
  sms: s.optional(s.boolean()),
  voice: s.optional(s.boolean()),
  fax: s.optional(s.boolean()),
});
