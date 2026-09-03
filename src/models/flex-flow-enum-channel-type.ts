import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
