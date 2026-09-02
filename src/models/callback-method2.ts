import { s, type EnumSchema } from "../core/index.js";

export const CallbackMethod2 = {
  Post: "POST",
  Put: "PUT",
} as const;
export type CallbackMethod2 = (typeof CallbackMethod2)[keyof typeof CallbackMethod2] | (string & {});

export const callbackMethod2Schema: EnumSchema<CallbackMethod2> = s.enumOf<CallbackMethod2>(CallbackMethod2);
