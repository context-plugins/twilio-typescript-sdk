import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
