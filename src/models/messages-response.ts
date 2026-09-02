import { s, type Schema } from "../core/index.js";
import { messagePropertiesSchema, type MessageProperties } from "./message-properties.js";

export type MessagesResponse = {
  accountSid: string;
  optOutSid: string;
  config: MessageProperties[];
};

export const messagesResponseSchema: Schema<MessagesResponse> = s.object<MessagesResponse>({
  accountSid: s.string(),
  optOutSid: s.string(),
  config: s.array(s.lazy(() => messagePropertiesSchema)),
  _keysMap: {
    accountSid: "account_sid",
    optOutSid: "opt_out_sid",
  },
});
