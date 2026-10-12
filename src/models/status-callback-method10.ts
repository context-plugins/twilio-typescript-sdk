import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST` and defaults to
 * `POST`.
 */
export const StatusCallbackMethod10 = {
  Get: "GET",
  Post: "POST",
} as const;
export type StatusCallbackMethod10 =
  | (typeof StatusCallbackMethod10)[keyof typeof StatusCallbackMethod10]
  | (string & {});

export const statusCallbackMethod10Schema: EnumSchema<StatusCallbackMethod10> =
  s.enumOf<StatusCallbackMethod10>(StatusCallbackMethod10);
