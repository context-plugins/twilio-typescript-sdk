import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of customer account in the losing carrier. This should either be: 'Individual' or
 * 'Business'., The type of End User the regulation requires - can be `Individual` or `Business`.
 */
export const CustomerType = {
  Business: "Business",
  Individual: "Individual",
} as const;
export type CustomerType = (typeof CustomerType)[keyof typeof CustomerType] | (string & {});

export const customerTypeSchema: EnumSchema<CustomerType> = s.enumOf<CustomerType>(CustomerType);
