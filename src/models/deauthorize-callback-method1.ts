import { s, type EnumSchema } from "../core/index.js";

export const DeauthorizeCallbackMethod1 = {
  Get: "GET",
  Post: "POST",
} as const;
export type DeauthorizeCallbackMethod1 =
  | (typeof DeauthorizeCallbackMethod1)[keyof typeof DeauthorizeCallbackMethod1]
  | (string & {});

export const deauthorizeCallbackMethod1Schema: EnumSchema<DeauthorizeCallbackMethod1> =
  s.enumOf<DeauthorizeCallbackMethod1>(DeauthorizeCallbackMethod1);
