import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messageTypeConfigSchema, type MessageTypeConfig } from "./message-type-config.js";

export type MessageTypesResponse = {
  /** The SID of the account that owns this opt-out configuration */
  accountSid: string;
  /** The SID of the opt-out configuration */
  optOutSid: string;
  /** List of message types associated with this opt-out configuration */
  messageTypes: MessageTypeConfig[];
};

export const messageTypesResponseSchema: Schema<MessageTypesResponse> = s.object<MessageTypesResponse>({
  accountSid: s.string(),
  optOutSid: s.string(),
  messageTypes: s.array(s.lazy(() => messageTypeConfigSchema)),
  _keysMap: {
    accountSid: "account_sid",
    optOutSid: "opt_out_sid",
    messageTypes: "message_types",
  },
});
