import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The HTTP method we should use when calling the `url`. Can be: `GET` or `POST` and the default is
 * `POST`. If an `application_sid` parameter is present, this parameter is ignored.
 */
export const Method1 = {
  Get: "GET",
  Post: "POST",
} as const;
export type Method1 = (typeof Method1)[keyof typeof Method1] | (string & {});

export const method1Schema: EnumSchema<Method1> = s.enumOf<Method1>(Method1);
