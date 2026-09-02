import { s, type Schema } from "../core/index.js";
import { flexV1WebChannelSchema, type FlexV1WebChannel } from "./flex-v1-web-channel.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListWebChannelResponse = {
  flexChatChannels?: FlexV1WebChannel[];
  meta?: Meta;
};

export const listWebChannelResponseSchema: Schema<ListWebChannelResponse> = s.object<ListWebChannelResponse>({
  flexChatChannels: s.optional(s.array(s.lazy(() => flexV1WebChannelSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
  _keysMap: {
    flexChatChannels: "flex_chat_channels",
  },
});
