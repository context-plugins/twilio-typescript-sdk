import { s, type EnumSchema } from "../core/index.js";

export const LineType = {
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
export type LineType = (typeof LineType)[keyof typeof LineType] | (string & {});

export const lineTypeSchema: EnumSchema<LineType> = s.enumOf<LineType>(LineType);
