import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The HTTP method we should use when calling the `status_callback` URL. Can be: `GET` or `POST` and
 * the default is `POST`. If an `application_sid` parameter is present, this parameter is ignored.
 */
export const StatusCallbackMethod8 = {
  Get: "GET",
  Post: "POST",
} as const;
export type StatusCallbackMethod8 =
  | (typeof StatusCallbackMethod8)[keyof typeof StatusCallbackMethod8]
  | (string & {});

export const statusCallbackMethod8Schema: EnumSchema<StatusCallbackMethod8> =
  s.enumOf<StatusCallbackMethod8>(StatusCallbackMethod8);
