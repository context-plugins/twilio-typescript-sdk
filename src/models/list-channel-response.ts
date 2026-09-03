import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { flexV1ChannelSchema, type FlexV1Channel } from "./flex-v1-channel.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListChannelResponse = {
  flexChatChannels?: FlexV1Channel[];
  meta?: Meta;
};

export const listChannelResponseSchema: Schema<ListChannelResponse> = s.object<ListChannelResponse>({
  flexChatChannels: s.optional(s.array(s.lazy(() => flexV1ChannelSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
  _keysMap: {
    flexChatChannels: "flex_chat_channels",
  },
});
