import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The channel type. One of `web`, `facebook`, `sms`, `whatsapp`, `line` or `custom`. By default,
 * Studio’s Send to Flex widget passes it on to the Task attributes for Tasks created based on this
 * Flex Flow. The Task attributes will be used by the Flex UI to render the respective Task as
 * appropriate (applying channel-specific design and length limits). If `channelType` is `facebook`,
 * `whatsapp` or `line`, the Send to Flex widget should set the Task Channel to Programmable Chat.
 */
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
