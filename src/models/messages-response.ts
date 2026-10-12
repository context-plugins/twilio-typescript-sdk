import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messagePropertiesSchema, type MessageProperties } from "./message-properties.js";

export type MessagesResponse = {
  /** The SID of the account that owns this opt-out configuration */
  accountSid: string;
  /** The SID of the opt-out configuration */
  optOutSid: string;
  /** List of message configurations for different keyword types */
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
