import { s, type EnumSchema } from "../core/index.js";

export const AnnounceMethod1 = {
  Get: "GET",
  Post: "POST",
} as const;
export type AnnounceMethod1 = (typeof AnnounceMethod1)[keyof typeof AnnounceMethod1] | (string & {});

export const announceMethod1Schema: EnumSchema<AnnounceMethod1> = s.enumOf<AnnounceMethod1>(AnnounceMethod1);
