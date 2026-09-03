import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const HoldMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type HoldMethod = (typeof HoldMethod)[keyof typeof HoldMethod] | (string & {});

export const holdMethodSchema: EnumSchema<HoldMethod> = s.enumOf<HoldMethod>(HoldMethod);
