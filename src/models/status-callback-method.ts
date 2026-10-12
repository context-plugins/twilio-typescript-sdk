import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The HTTP method we use to call `status_callback`. Can be: `GET` or `POST`. */
export const StatusCallbackMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type StatusCallbackMethod =
  | (typeof StatusCallbackMethod)[keyof typeof StatusCallbackMethod]
  | (string & {});

export const statusCallbackMethodSchema: EnumSchema<StatusCallbackMethod> =
  s.enumOf<StatusCallbackMethod>(StatusCallbackMethod);
