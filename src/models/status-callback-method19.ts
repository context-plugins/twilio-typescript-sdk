import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The HTTP method Twilio uses when sending `status_callback` requests. Possible values are `GET`
 * and `POST`. Default is `POST`.
 */
export const StatusCallbackMethod19 = {
  Get: "GET",
  Post: "POST",
} as const;
export type StatusCallbackMethod19 =
  | (typeof StatusCallbackMethod19)[keyof typeof StatusCallbackMethod19]
  | (string & {});

export const statusCallbackMethod19Schema: EnumSchema<StatusCallbackMethod19> =
  s.enumOf<StatusCallbackMethod19>(StatusCallbackMethod19);
