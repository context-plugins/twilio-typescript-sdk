import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FallbackMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type FallbackMethod = (typeof FallbackMethod)[keyof typeof FallbackMethod] | (string & {});

export const fallbackMethodSchema: EnumSchema<FallbackMethod> = s.enumOf<FallbackMethod>(FallbackMethod);
