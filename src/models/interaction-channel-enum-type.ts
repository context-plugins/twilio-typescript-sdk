import { s, type EnumSchema } from "../core/index.js";

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
