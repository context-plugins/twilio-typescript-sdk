import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The HTTP method we should use to call `callback_url`. Can be: `GET` or `POST` and the default is
 * `POST`.
 */
export const CallbackMethod1 = {
  Get: "GET",
  Post: "POST",
} as const;
export type CallbackMethod1 = (typeof CallbackMethod1)[keyof typeof CallbackMethod1] | (string & {});

export const callbackMethod1Schema: EnumSchema<CallbackMethod1> = s.enumOf<CallbackMethod1>(CallbackMethod1);
