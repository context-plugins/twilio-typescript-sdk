import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The HTTP method used to call `announce_url`. Can be: `GET` or `POST` and the default is `POST`
 */
export const AnnounceMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type AnnounceMethod = (typeof AnnounceMethod)[keyof typeof AnnounceMethod] | (string & {});

export const announceMethodSchema: EnumSchema<AnnounceMethod> = s.enumOf<AnnounceMethod>(AnnounceMethod);
