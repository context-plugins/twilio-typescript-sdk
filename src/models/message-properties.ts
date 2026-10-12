import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessageProperties = {
  /** The keyword type in format KeywordType.Locale (e.g., STOP.ENGLISH, HELP.FRENCH) */
  keywordType: string;
  /** The message type identifier (typically country codes or special identifiers) */
  messageType: string;
  /** The actual opt-out message text to be sent */
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
