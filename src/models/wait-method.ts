import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The HTTP method we should use to call `wait_url`. Can be `GET` or `POST` and the default is
 * `POST`. When using a static audio file, this should be `GET` so that we can cache the file.
 */
export const WaitMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type WaitMethod = (typeof WaitMethod)[keyof typeof WaitMethod] | (string & {});

export const waitMethodSchema: EnumSchema<WaitMethod> = s.enumOf<WaitMethod>(WaitMethod);
