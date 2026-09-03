import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
