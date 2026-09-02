import { s, type EnumSchema } from "../core/index.js";

export const SmsFallbackMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type SmsFallbackMethod = (typeof SmsFallbackMethod)[keyof typeof SmsFallbackMethod] | (string & {});

export const smsFallbackMethodSchema: EnumSchema<SmsFallbackMethod> =
  s.enumOf<SmsFallbackMethod>(SmsFallbackMethod);
