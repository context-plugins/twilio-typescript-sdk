import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RequestMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type RequestMethod = (typeof RequestMethod)[keyof typeof RequestMethod] | (string & {});

export const requestMethodSchema: EnumSchema<RequestMethod> = s.enumOf<RequestMethod>(RequestMethod);
