import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The Interaction Channel's type. Can be: `sms`, `email`, `chat`, `whatsapp`, `web`, `messenger`,
 * or `gbm`. **Note:** These can be different from the task channel type specified in the Routing
 * attributes. Task channel type corresponds to channel capacity while this channel type is the
 * actual media type
 */
export const InteractionChannelEnumType = {
  Voice: "voice",
  Sms: "sms",
  Email: "email",
  Web: "web",
  Whatsapp: "whatsapp",
  Chat: "chat",
  Messenger: "messenger",
  Gbm: "gbm",
} as const;
export type InteractionChannelEnumType =
  | (typeof InteractionChannelEnumType)[keyof typeof InteractionChannelEnumType]
  | (string & {});

export const interactionChannelEnumTypeSchema: EnumSchema<InteractionChannelEnumType> =
  s.enumOf<InteractionChannelEnumType>(InteractionChannelEnumType);
