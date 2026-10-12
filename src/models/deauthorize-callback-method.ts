import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The HTTP method we use to call `deauthorize_callback_url`. */
export const DeauthorizeCallbackMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type DeauthorizeCallbackMethod =
  | (typeof DeauthorizeCallbackMethod)[keyof typeof DeauthorizeCallbackMethod]
  | (string & {});

export const deauthorizeCallbackMethodSchema: EnumSchema<DeauthorizeCallbackMethod> =
  s.enumOf<DeauthorizeCallbackMethod>(DeauthorizeCallbackMethod);
