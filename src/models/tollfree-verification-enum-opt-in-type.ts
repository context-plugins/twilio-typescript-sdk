import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Describe how a user opts-in to text messages. */
export const TollfreeVerificationEnumOptInType = {
  Verbal: "VERBAL",
  WebForm: "WEB_FORM",
  PaperForm: "PAPER_FORM",
  ViaText: "VIA_TEXT",
  MobileQrCode: "MOBILE_QR_CODE",
  Import: "IMPORT",
  ImportPleaseReplace: "IMPORT_PLEASE_REPLACE",
} as const;
export type TollfreeVerificationEnumOptInType =
  | (typeof TollfreeVerificationEnumOptInType)[keyof typeof TollfreeVerificationEnumOptInType]
  | (string & {});

export const tollfreeVerificationEnumOptInTypeSchema: EnumSchema<TollfreeVerificationEnumOptInType> =
  s.enumOf<TollfreeVerificationEnumOptInType>(TollfreeVerificationEnumOptInType);
