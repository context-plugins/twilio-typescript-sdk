import { s, type EnumSchema } from "../core/index.js";

export const EndUserEnumType = {
  Individual: "individual",
  Business: "business",
} as const;
export type EndUserEnumType = (typeof EndUserEnumType)[keyof typeof EndUserEnumType] | (string & {});

export const endUserEnumTypeSchema: EnumSchema<EndUserEnumType> = s.enumOf<EndUserEnumType>(EndUserEnumType);
