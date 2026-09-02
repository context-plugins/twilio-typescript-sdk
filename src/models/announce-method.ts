import { s, type EnumSchema } from "../core/index.js";

export const AnnounceMethod = {
  Get: "GET",
  Post: "POST",
} as const;
export type AnnounceMethod = (typeof AnnounceMethod)[keyof typeof AnnounceMethod] | (string & {});

export const announceMethodSchema: EnumSchema<AnnounceMethod> = s.enumOf<AnnounceMethod>(AnnounceMethod);
