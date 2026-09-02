import { s, type EnumSchema } from "../core/index.js";

export const StatusCallbackMethod16 = {
  Get: "GET",
  Post: "POST",
} as const;
export type StatusCallbackMethod16 =
  | (typeof StatusCallbackMethod16)[keyof typeof StatusCallbackMethod16]
  | (string & {});

export const statusCallbackMethod16Schema: EnumSchema<StatusCallbackMethod16> =
  s.enumOf<StatusCallbackMethod16>(StatusCallbackMethod16);
