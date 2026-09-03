import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WaitMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type WaitMethod = (typeof WaitMethod)[keyof typeof WaitMethod] | (string & {});

export const waitMethodSchema: EnumSchema<WaitMethod> = s.enumOf<WaitMethod>(WaitMethod);
