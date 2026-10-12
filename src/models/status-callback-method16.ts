import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The HTTP method we should use to call `status_callback`. Can be: `GET` and `POST` and defaults to
 * `POST`.
 */
export const StatusCallbackMethod16 = {
  Get: "GET",
  Post: "POST",
} as const;
export type StatusCallbackMethod16 =
  | (typeof StatusCallbackMethod16)[keyof typeof StatusCallbackMethod16]
  | (string & {});

export const statusCallbackMethod16Schema: EnumSchema<StatusCallbackMethod16> =
  s.enumOf<StatusCallbackMethod16>(StatusCallbackMethod16);
