import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WebChannelEnumChatStatus = {
  Inactive: "inactive",
} as const;
export type WebChannelEnumChatStatus =
  | (typeof WebChannelEnumChatStatus)[keyof typeof WebChannelEnumChatStatus]
  | (string & {});

export const webChannelEnumChatStatusSchema: EnumSchema<WebChannelEnumChatStatus> =
  s.enumOf<WebChannelEnumChatStatus>(WebChannelEnumChatStatus);
