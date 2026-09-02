import { s, type Schema } from "../core/index.js";

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
