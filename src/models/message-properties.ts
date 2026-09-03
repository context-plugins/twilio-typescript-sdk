import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessageProperties = {
  keywordType: string;
  messageType: string;
  message: string;
};

export const messagePropertiesSchema: Schema<MessageProperties> = s.object<MessageProperties>({
  keywordType: s.string(),
  messageType: s.string(),
  message: s.string(),
  _keysMap: {
    keywordType: "keyword_type",
    messageType: "message_type",
  },
});
