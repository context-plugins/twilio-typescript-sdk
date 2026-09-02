import { s, type EnumSchema } from "../core/index.js";

export const StatusCallbackMethod15 = {
  Get: "GET",
  Post: "POST",
} as const;
export type StatusCallbackMethod15 =
  | (typeof StatusCallbackMethod15)[keyof typeof StatusCallbackMethod15]
  | (string & {});

export const statusCallbackMethod15Schema: EnumSchema<StatusCallbackMethod15> =
  s.enumOf<StatusCallbackMethod15>(StatusCallbackMethod15);
