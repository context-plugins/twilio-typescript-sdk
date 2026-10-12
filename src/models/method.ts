import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The HTTP method we should use when calling the `url` parameter's value. Can be: `GET` or `POST`
 * and the default is `POST`. If an `application_sid` parameter is present, this parameter is
 * ignored.
 */
export const Method = {
  Get: "GET",
  Post: "POST",
} as const;
export type Method = (typeof Method)[keyof typeof Method] | (string & {});

export const methodSchema: EnumSchema<Method> = s.enumOf<Method>(Method);
