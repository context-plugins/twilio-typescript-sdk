import { s, type EnumSchema } from "../core/index.js";

export const CallbackMethod1 = {
  Get: "GET",
  Post: "POST",
} as const;
export type CallbackMethod1 = (typeof CallbackMethod1)[keyof typeof CallbackMethod1] | (string & {});

export const callbackMethod1Schema: EnumSchema<CallbackMethod1> = s.enumOf<CallbackMethod1>(CallbackMethod1);
