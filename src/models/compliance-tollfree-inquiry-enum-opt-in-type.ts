import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Describe how a user opts-in to text messages. */
export const ComplianceTollfreeInquiryEnumOptInType = {
  Verbal: "VERBAL",
  WebForm: "WEB_FORM",
  PaperForm: "PAPER_FORM",
  ViaText: "VIA_TEXT",
  MobileQrCode: "MOBILE_QR_CODE",
} as const;
export type ComplianceTollfreeInquiryEnumOptInType =
  | (typeof ComplianceTollfreeInquiryEnumOptInType)[keyof typeof ComplianceTollfreeInquiryEnumOptInType]
  | (string & {});

export const complianceTollfreeInquiryEnumOptInTypeSchema: EnumSchema<ComplianceTollfreeInquiryEnumOptInType> =
  s.enumOf<ComplianceTollfreeInquiryEnumOptInType>(ComplianceTollfreeInquiryEnumOptInType);
