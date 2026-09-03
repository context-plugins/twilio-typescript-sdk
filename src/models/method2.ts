import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Method2 = {
  Get: "GET",
  Post: "POST",
} as const;
export type Method2 = (typeof Method2)[keyof typeof Method2] | (string & {});

export const method2Schema: EnumSchema<Method2> = s.enumOf<Method2>(Method2);
