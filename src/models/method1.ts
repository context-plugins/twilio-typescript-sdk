import { s, type EnumSchema } from "../core/index.js";

export const Method1 = {
  Get: "GET",
  Post: "POST",
} as const;
export type Method1 = (typeof Method1)[keyof typeof Method1] | (string & {});

export const method1Schema: EnumSchema<Method1> = s.enumOf<Method1>(Method1);
