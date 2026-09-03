import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AmdStatusCallbackMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type AmdStatusCallbackMethod =
  | (typeof AmdStatusCallbackMethod)[keyof typeof AmdStatusCallbackMethod]
  | (string & {});

export const amdStatusCallbackMethodSchema: EnumSchema<AmdStatusCallbackMethod> =
  s.enumOf<AmdStatusCallbackMethod>(AmdStatusCallbackMethod);
