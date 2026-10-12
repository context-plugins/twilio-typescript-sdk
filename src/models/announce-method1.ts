import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The HTTP method we should use to call `announce_url`. Can be: `GET` or `POST` and defaults to
 * `POST`.
 */
export const AnnounceMethod1 = {
  Get: "GET",
  Post: "POST",
} as const;
export type AnnounceMethod1 = (typeof AnnounceMethod1)[keyof typeof AnnounceMethod1] | (string & {});

export const announceMethod1Schema: EnumSchema<AnnounceMethod1> = s.enumOf<AnnounceMethod1>(AnnounceMethod1);
