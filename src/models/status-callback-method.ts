import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusCallbackMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type StatusCallbackMethod =
  | (typeof StatusCallbackMethod)[keyof typeof StatusCallbackMethod]
  | (string & {});

export const statusCallbackMethodSchema: EnumSchema<StatusCallbackMethod> =
  s.enumOf<StatusCallbackMethod>(StatusCallbackMethod);
