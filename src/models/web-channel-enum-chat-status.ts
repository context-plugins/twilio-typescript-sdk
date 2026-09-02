import { s, type EnumSchema } from "../core/index.js";

export const WebChannelEnumChatStatus = {
  Inactive: "inactive",
} as const;
export type WebChannelEnumChatStatus =
  | (typeof WebChannelEnumChatStatus)[keyof typeof WebChannelEnumChatStatus]
  | (string & {});

export const webChannelEnumChatStatusSchema: EnumSchema<WebChannelEnumChatStatus> =
  s.enumOf<WebChannelEnumChatStatus>(WebChannelEnumChatStatus);
