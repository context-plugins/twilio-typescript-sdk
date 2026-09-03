import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Method3 = {
  Get: "GET",
  Post: "POST",
} as const;
export type Method3 = (typeof Method3)[keyof typeof Method3] | (string & {});

export const method3Schema: EnumSchema<Method3> = s.enumOf<Method3>(Method3);
