import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
