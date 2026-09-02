import { s, type EnumSchema } from "../core/index.js";

export const StatusCallbackMethod6 = {
  Get: "GET",
  Post: "POST",
} as const;
export type StatusCallbackMethod6 =
  | (typeof StatusCallbackMethod6)[keyof typeof StatusCallbackMethod6]
  | (string & {});

export const statusCallbackMethod6Schema: EnumSchema<StatusCallbackMethod6> =
  s.enumOf<StatusCallbackMethod6>(StatusCallbackMethod6);
