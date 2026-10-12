import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The HTTP method that we should use to request the `fallback_url`. Can be: `GET` or `POST` and the
 * default is `POST`. If an `application_sid` parameter is present, this parameter is ignored.
 */
export const FallbackMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type FallbackMethod = (typeof FallbackMethod)[keyof typeof FallbackMethod] | (string & {});

export const fallbackMethodSchema: EnumSchema<FallbackMethod> = s.enumOf<FallbackMethod>(FallbackMethod);
