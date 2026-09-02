import { s, type EnumSchema } from "../core/index.js";

export const Method11 = {
  Post: "POST",
  Get: "GET",
  Put: "PUT",
  Delete: "DELETE",
  Patch: "PATCH",
} as const;
export type Method11 = (typeof Method11)[keyof typeof Method11] | (string & {});

export const method11Schema: EnumSchema<Method11> = s.enumOf<Method11>(Method11);
