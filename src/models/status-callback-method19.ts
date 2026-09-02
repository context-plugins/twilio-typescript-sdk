import { s, type EnumSchema } from "../core/index.js";

export const StatusCallbackMethod19 = {
  Get: "GET",
  Post: "POST",
} as const;
export type StatusCallbackMethod19 =
  | (typeof StatusCallbackMethod19)[keyof typeof StatusCallbackMethod19]
  | (string & {});

export const statusCallbackMethod19Schema: EnumSchema<StatusCallbackMethod19> =
  s.enumOf<StatusCallbackMethod19>(StatusCallbackMethod19);
