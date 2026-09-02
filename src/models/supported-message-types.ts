import { s, type Schema } from "../core/index.js";
import { messageTypeConfigSchema, type MessageTypeConfig } from "./message-type-config.js";

export type SupportedMessageTypes = {
  messageTypes: MessageTypeConfig[];
};

export const supportedMessageTypesSchema: Schema<SupportedMessageTypes> = s.object<SupportedMessageTypes>({
  messageTypes: s.array(s.lazy(() => messageTypeConfigSchema)),
  _keysMap: {
    messageTypes: "message_types",
  },
});
