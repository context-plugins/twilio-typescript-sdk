import { s, type EnumSchema } from "../core/index.js";

export const StatusCallbackMethod8 = {
  Get: "GET",
  Post: "POST",
} as const;
export type StatusCallbackMethod8 =
  | (typeof StatusCallbackMethod8)[keyof typeof StatusCallbackMethod8]
  | (string & {});

export const statusCallbackMethod8Schema: EnumSchema<StatusCallbackMethod8> =
  s.enumOf<StatusCallbackMethod8>(StatusCallbackMethod8);
