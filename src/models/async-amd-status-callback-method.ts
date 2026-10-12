import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The HTTP method we should use when calling the `async_amd_status_callback` URL. Can be: `GET` or
 * `POST` and the default is `POST`.
 */
export const AsyncAmdStatusCallbackMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type AsyncAmdStatusCallbackMethod =
  | (typeof AsyncAmdStatusCallbackMethod)[keyof typeof AsyncAmdStatusCallbackMethod]
  | (string & {});

export const asyncAmdStatusCallbackMethodSchema: EnumSchema<AsyncAmdStatusCallbackMethod> =
  s.enumOf<AsyncAmdStatusCallbackMethod>(AsyncAmdStatusCallbackMethod);
