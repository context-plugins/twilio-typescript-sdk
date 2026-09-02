import { s, type EnumSchema } from "../core/index.js";

export const SmsFallbackMethod9 = {
  Get: "GET",
  Post: "POST",
} as const;
export type SmsFallbackMethod9 = (typeof SmsFallbackMethod9)[keyof typeof SmsFallbackMethod9] | (string & {});

export const smsFallbackMethod9Schema: EnumSchema<SmsFallbackMethod9> =
  s.enumOf<SmsFallbackMethod9>(SmsFallbackMethod9);
