import { s, type EnumSchema } from "../core/index.js";

export const Method21 = {
  Post: "POST",
  Get: "GET",
  Put: "PUT",
  Delete: "DELETE",
  Patch: "PATCH",
} as const;
export type Method21 = (typeof Method21)[keyof typeof Method21] | (string & {});

export const method21Schema: EnumSchema<Method21> = s.enumOf<Method21>(Method21);
