import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SmsFallbackMethod7 = {
  Get: "GET",
  Post: "POST",
} as const;
export type SmsFallbackMethod7 = (typeof SmsFallbackMethod7)[keyof typeof SmsFallbackMethod7] | (string & {});

export const smsFallbackMethod7Schema: EnumSchema<SmsFallbackMethod7> =
  s.enumOf<SmsFallbackMethod7>(SmsFallbackMethod7);
