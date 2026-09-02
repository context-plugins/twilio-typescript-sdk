import { s, type EnumSchema } from "../core/index.js";

export const DeauthorizeCallbackMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type DeauthorizeCallbackMethod =
  | (typeof DeauthorizeCallbackMethod)[keyof typeof DeauthorizeCallbackMethod]
  | (string & {});

export const deauthorizeCallbackMethodSchema: EnumSchema<DeauthorizeCallbackMethod> =
  s.enumOf<DeauthorizeCallbackMethod>(DeauthorizeCallbackMethod);
