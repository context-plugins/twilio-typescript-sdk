import { s, type EnumSchema } from "../core/index.js";

export const FallbackMethod1 = {
  Post: "POST",
  Put: "PUT",
} as const;
export type FallbackMethod1 = (typeof FallbackMethod1)[keyof typeof FallbackMethod1] | (string & {});

export const fallbackMethod1Schema: EnumSchema<FallbackMethod1> = s.enumOf<FallbackMethod1>(FallbackMethod1);
