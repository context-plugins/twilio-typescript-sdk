import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PhoneNumber1 = {
  phoneNumber: string;
  pin?: string;
};

export const phoneNumber1Schema: Schema<PhoneNumber1> = s.object<PhoneNumber1>({
  phoneNumber: s.string(),
  pin: s.optional(s.string()),
  _keysMap: {
    phoneNumber: "phone_number",
  },
});
