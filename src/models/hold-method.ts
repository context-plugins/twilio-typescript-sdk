import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The HTTP method we should use to call `hold_url`. Can be: `GET` or `POST` and the default is
 * `GET`.
 */
export const HoldMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type HoldMethod = (typeof HoldMethod)[keyof typeof HoldMethod] | (string & {});

export const holdMethodSchema: EnumSchema<HoldMethod> = s.enumOf<HoldMethod>(HoldMethod);
