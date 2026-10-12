import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The HTTP method we use to call `sms_fallback_url`. Can be: `GET` or `POST`. */
export const SmsFallbackMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type SmsFallbackMethod = (typeof SmsFallbackMethod)[keyof typeof SmsFallbackMethod] | (string & {});

export const smsFallbackMethodSchema: EnumSchema<SmsFallbackMethod> =
  s.enumOf<SmsFallbackMethod>(SmsFallbackMethod);
