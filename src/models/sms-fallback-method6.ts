import { s, type EnumSchema } from "../core/index.js";

export const SmsFallbackMethod6 = {
  Get: "GET",
  Post: "POST",
} as const;
export type SmsFallbackMethod6 = (typeof SmsFallbackMethod6)[keyof typeof SmsFallbackMethod6] | (string & {});

export const smsFallbackMethod6Schema: EnumSchema<SmsFallbackMethod6> =
  s.enumOf<SmsFallbackMethod6>(SmsFallbackMethod6);
