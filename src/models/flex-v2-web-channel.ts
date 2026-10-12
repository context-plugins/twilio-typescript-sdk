import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV2WebChannel = {
  /**
   * The unique string representing the [Conversation
   * resource](https://www.twilio.com/docs/conversations/api/conversation-resource) created.
   */
  conversationSid?: string | null;
  /**
   * The unique string representing the User created and should be authorized to participate in the
   * Conversation. For more details, see [User Identity & Access
   * Tokens](https://www.twilio.com/docs/conversations/identity).
   */
  identity?: string | null;
};

export const flexV2WebChannelSchema: Schema<FlexV2WebChannel> = s.object<FlexV2WebChannel>({
  conversationSid: s.optionalNullable(s.string()),
  identity: s.optionalNullable(s.string()),
  _keysMap: {
    conversationSid: "conversation_sid",
  },
});
