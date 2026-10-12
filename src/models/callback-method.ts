import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The HTTP method we use to call `callback_url`. Can be: `GET` or `POST`. */
export const CallbackMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type CallbackMethod = (typeof CallbackMethod)[keyof typeof CallbackMethod] | (string & {});

export const callbackMethodSchema: EnumSchema<CallbackMethod> = s.enumOf<CallbackMethod>(CallbackMethod);
