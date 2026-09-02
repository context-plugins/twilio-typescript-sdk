import { s, type EnumSchema } from "../core/index.js";

export const SmsFallbackMethod14 = {
  Get: "GET",
  Post: "POST",
} as const;
export type SmsFallbackMethod14 =
  | (typeof SmsFallbackMethod14)[keyof typeof SmsFallbackMethod14]
  | (string & {});

export const smsFallbackMethod14Schema: EnumSchema<SmsFallbackMethod14> =
  s.enumOf<SmsFallbackMethod14>(SmsFallbackMethod14);
