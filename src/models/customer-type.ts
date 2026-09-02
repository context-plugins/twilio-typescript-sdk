import { s, type EnumSchema } from "../core/index.js";

export const CustomerType = {
  Business: "Business",
  Individual: "Individual",
} as const;
export type CustomerType = (typeof CustomerType)[keyof typeof CustomerType] | (string & {});

export const customerTypeSchema: EnumSchema<CustomerType> = s.enumOf<CustomerType>(CustomerType);
