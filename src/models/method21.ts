import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Method21 = {
  Post: "POST",
  Get: "GET",
  Put: "PUT",
  Delete: "DELETE",
  Patch: "PATCH",
} as const;
export type Method21 = (typeof Method21)[keyof typeof Method21] | (string & {});

export const method21Schema: EnumSchema<Method21> = s.enumOf<Method21>(Method21);
