import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV2WebChannel = {
  conversationSid?: string | null;
  identity?: string | null;
};

export const flexV2WebChannelSchema: Schema<FlexV2WebChannel> = s.object<FlexV2WebChannel>({
  conversationSid: s.optionalNullable(s.string()),
  identity: s.optionalNullable(s.string()),
  _keysMap: {
    conversationSid: "conversation_sid",
  },
});
