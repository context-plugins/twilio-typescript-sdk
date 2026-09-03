import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PhoneNumber = {
  phoneNumber?: string;
  label?: string;
};

export const phoneNumberSchema: Schema<PhoneNumber> = s.object<PhoneNumber>({
  phoneNumber: s.optional(s.string()),
  label: s.optional(s.string()),
  _keysMap: {
    phoneNumber: "phone_number",
  },
});
