import { s, type EnumSchema } from "../core/index.js";

export const FlexFlowEnumChannelType = {
  Web: "web",
  Sms: "sms",
  Facebook: "facebook",
  Whatsapp: "whatsapp",
  Line: "line",
  Custom: "custom",
} as const;
export type FlexFlowEnumChannelType =
  | (typeof FlexFlowEnumChannelType)[keyof typeof FlexFlowEnumChannelType]
  | (string & {});

export const flexFlowEnumChannelTypeSchema: EnumSchema<FlexFlowEnumChannelType> =
  s.enumOf<FlexFlowEnumChannelType>(FlexFlowEnumChannelType);
