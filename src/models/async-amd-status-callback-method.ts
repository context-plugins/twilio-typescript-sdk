import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AsyncAmdStatusCallbackMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type AsyncAmdStatusCallbackMethod =
  | (typeof AsyncAmdStatusCallbackMethod)[keyof typeof AsyncAmdStatusCallbackMethod]
  | (string & {});

export const asyncAmdStatusCallbackMethodSchema: EnumSchema<AsyncAmdStatusCallbackMethod> =
  s.enumOf<AsyncAmdStatusCallbackMethod>(AsyncAmdStatusCallbackMethod);
