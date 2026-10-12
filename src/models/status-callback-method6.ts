import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST`. */
export const StatusCallbackMethod6 = {
  Get: "GET",
  Post: "POST",
} as const;
export type StatusCallbackMethod6 =
  | (typeof StatusCallbackMethod6)[keyof typeof StatusCallbackMethod6]
  | (string & {});

export const statusCallbackMethod6Schema: EnumSchema<StatusCallbackMethod6> =
  s.enumOf<StatusCallbackMethod6>(StatusCallbackMethod6);
