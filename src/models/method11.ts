import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Method11 = {
  Post: "POST",
  Get: "GET",
  Put: "PUT",
  Delete: "DELETE",
  Patch: "PATCH",
} as const;
export type Method11 = (typeof Method11)[keyof typeof Method11] | (string & {});

export const method11Schema: EnumSchema<Method11> = s.enumOf<Method11>(Method11);
