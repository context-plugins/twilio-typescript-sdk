import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST`, and the default
 * is `POST`.
 */
export const StatusCallbackMethod15 = {
  Get: "GET",
  Post: "POST",
} as const;
export type StatusCallbackMethod15 =
  | (typeof StatusCallbackMethod15)[keyof typeof StatusCallbackMethod15]
  | (string & {});

export const statusCallbackMethod15Schema: EnumSchema<StatusCallbackMethod15> =
  s.enumOf<StatusCallbackMethod15>(StatusCallbackMethod15);
