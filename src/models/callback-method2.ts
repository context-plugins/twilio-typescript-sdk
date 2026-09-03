import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CallbackMethod2 = {
  Post: "POST",
  Put: "PUT",
} as const;
export type CallbackMethod2 = (typeof CallbackMethod2)[keyof typeof CallbackMethod2] | (string & {});

export const callbackMethod2Schema: EnumSchema<CallbackMethod2> = s.enumOf<CallbackMethod2>(CallbackMethod2);
