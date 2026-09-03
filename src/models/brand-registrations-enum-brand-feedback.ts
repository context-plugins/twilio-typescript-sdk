import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BrandRegistrationsEnumBrandFeedback = {
  TaxId: "TAX_ID",
  StockSymbol: "STOCK_SYMBOL",
  Nonprofit: "NONPROFIT",
  GovernmentEntity: "GOVERNMENT_ENTITY",
  Others: "OTHERS",
} as const;
export type BrandRegistrationsEnumBrandFeedback =
  | (typeof BrandRegistrationsEnumBrandFeedback)[keyof typeof BrandRegistrationsEnumBrandFeedback]
  | (string & {});

export const brandRegistrationsEnumBrandFeedbackSchema: EnumSchema<BrandRegistrationsEnumBrandFeedback> =
  s.enumOf<BrandRegistrationsEnumBrandFeedback>(BrandRegistrationsEnumBrandFeedback);
