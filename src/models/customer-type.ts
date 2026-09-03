import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CustomerType = {
  Business: "Business",
  Individual: "Individual",
} as const;
export type CustomerType = (typeof CustomerType)[keyof typeof CustomerType] | (string & {});

export const customerTypeSchema: EnumSchema<CustomerType> = s.enumOf<CustomerType>(CustomerType);
