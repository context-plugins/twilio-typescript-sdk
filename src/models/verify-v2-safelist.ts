import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VerifyV2Safelist = {
  sid?: string | null;
  phoneNumber?: string | null;
  url?: string | null;
};

export const verifyV2SafelistSchema: Schema<VerifyV2Safelist> = s.object<VerifyV2Safelist>({
  sid: s.optionalNullable(s.string()),
  phoneNumber: s.optionalNullable(s.string()),
  url: s.optionalNullable(s.string()),
  _keysMap: {
    phoneNumber: "phone_number",
  },
});
