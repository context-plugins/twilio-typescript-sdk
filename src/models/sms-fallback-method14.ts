import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The HTTP method that we should use to call the `sms_fallback_url`. Can be: `GET` or `POST`. */
export const SmsFallbackMethod14 = {
  Get: "GET",
  Post: "POST",
} as const;
export type SmsFallbackMethod14 =
  | (typeof SmsFallbackMethod14)[keyof typeof SmsFallbackMethod14]
  | (string & {});

export const smsFallbackMethod14Schema: EnumSchema<SmsFallbackMethod14> =
  s.enumOf<SmsFallbackMethod14>(SmsFallbackMethod14);
