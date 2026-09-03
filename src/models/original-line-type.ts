import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OriginalLineType = {
  Mobile: "mobile",
  Landline: "landline",
  TollFree: "tollFree",
  FixedVoip: "fixedVoip",
  NonFixedVoip: "nonFixedVoip",
  Personal: "personal",
  Premium: "premium",
  Voicemail: "voicemail",
  SharedCost: "sharedCost",
  Uan: "uan",
  Pager: "pager",
  Unknown: "unknown",
} as const;
export type OriginalLineType = (typeof OriginalLineType)[keyof typeof OriginalLineType] | (string & {});

export const originalLineTypeSchema: EnumSchema<OriginalLineType> =
  s.enumOf<OriginalLineType>(OriginalLineType);
