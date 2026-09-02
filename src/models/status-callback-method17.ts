import { s, type EnumSchema } from "../core/index.js";

export const StatusCallbackMethod17 = {
  Get: "GET",
  Post: "POST",
} as const;
export type StatusCallbackMethod17 =
  | (typeof StatusCallbackMethod17)[keyof typeof StatusCallbackMethod17]
  | (string & {});

export const statusCallbackMethod17Schema: EnumSchema<StatusCallbackMethod17> =
  s.enumOf<StatusCallbackMethod17>(StatusCallbackMethod17);
