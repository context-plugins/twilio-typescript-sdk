import { s, type EnumSchema } from "../core/index.js";

export const Method = {
  Get: "GET",
  Post: "POST",
} as const;
export type Method = (typeof Method)[keyof typeof Method] | (string & {});

export const methodSchema: EnumSchema<Method> = s.enumOf<Method>(Method);
