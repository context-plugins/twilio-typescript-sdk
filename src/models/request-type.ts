import { s, type EnumSchema } from "../core/index.js";

export const RequestType = {
  New: "NEW",
  Migration: "MIGRATION",
  Lease: "LEASE",
} as const;
export type RequestType = (typeof RequestType)[keyof typeof RequestType] | (string & {});

export const requestTypeSchema: EnumSchema<RequestType> = s.enumOf<RequestType>(RequestType);
