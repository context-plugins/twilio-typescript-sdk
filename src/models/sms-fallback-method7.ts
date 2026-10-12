import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The HTTP method we should use to call `sms_fallback_url`. Can be: `GET` or `POST`. */
export const SmsFallbackMethod7 = {
  Get: "GET",
  Post: "POST",
} as const;
export type SmsFallbackMethod7 = (typeof SmsFallbackMethod7)[keyof typeof SmsFallbackMethod7] | (string & {});

export const smsFallbackMethod7Schema: EnumSchema<SmsFallbackMethod7> =
  s.enumOf<SmsFallbackMethod7>(SmsFallbackMethod7);
