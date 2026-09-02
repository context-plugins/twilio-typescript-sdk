import { s, type EnumSchema } from "../core/index.js";

export const OverriddenLineType = {
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
export type OverriddenLineType = (typeof OverriddenLineType)[keyof typeof OverriddenLineType] | (string & {});

export const overriddenLineTypeSchema: EnumSchema<OverriddenLineType> =
  s.enumOf<OverriddenLineType>(OverriddenLineType);
