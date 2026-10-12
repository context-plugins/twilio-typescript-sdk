import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The HTTP method we should use when requesting the `status_callback` URL. Can be: `GET` or `POST`
 * and the default is `POST`. If an `application_sid` parameter is present, this parameter is
 * ignored.
 */
export const StatusCallbackMethod9 = {
  Get: "GET",
  Post: "POST",
} as const;
export type StatusCallbackMethod9 =
  | (typeof StatusCallbackMethod9)[keyof typeof StatusCallbackMethod9]
  | (string & {});

export const statusCallbackMethod9Schema: EnumSchema<StatusCallbackMethod9> =
  s.enumOf<StatusCallbackMethod9>(StatusCallbackMethod9);
