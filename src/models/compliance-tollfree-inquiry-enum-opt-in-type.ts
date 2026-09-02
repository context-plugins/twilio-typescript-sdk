import { s, type EnumSchema } from "../core/index.js";

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
