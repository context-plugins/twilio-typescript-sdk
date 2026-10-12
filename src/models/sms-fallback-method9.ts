import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The HTTP method that we should use to call `sms_fallback_url`. Can be: `GET` or `POST` and
 * defaults to `POST`.
 */
export const SmsFallbackMethod9 = {
  Get: "GET",
  Post: "POST",
} as const;
export type SmsFallbackMethod9 = (typeof SmsFallbackMethod9)[keyof typeof SmsFallbackMethod9] | (string & {});

export const smsFallbackMethod9Schema: EnumSchema<SmsFallbackMethod9> =
  s.enumOf<SmsFallbackMethod9>(SmsFallbackMethod9);
