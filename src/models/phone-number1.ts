import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PhoneNumber1 = {
  /** Phone number to be ported. This must be in the E164 Format. */
  phoneNumber: string;
  /**
   * Some losing carriers require a PIN to authorize the port of a phone number. If the phone number
   * is a US mobile phone number, the PIN is mandatory to process a porting request. Other carriers
   * and number types may also require a PIN, you'll need to contact the losing carrier to determine
   * what your phone number's PIN is.
   */
  pin?: string;
};

export const phoneNumber1Schema: Schema<PhoneNumber1> = s.object<PhoneNumber1>({
  phoneNumber: s.string(),
  pin: s.optional(s.string()),
  _keysMap: {
    phoneNumber: "phone_number",
  },
});
