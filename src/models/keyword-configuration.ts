import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type KeywordConfiguration = {
  /** The keyword type in format KeywordType.Locale (e.g., STOP.ENGLISH, HELP.FRENCH) */
  keywordType: string;
  /** The message type identifier (typically country codes or special identifiers) */
  messageType: string;
  /** Array of keyword strings for this configuration */
  keywords: string[];
};

export const keywordConfigurationSchema: Schema<KeywordConfiguration> = s.object<KeywordConfiguration>({
  keywordType: s.string(),
  messageType: s.string(),
  keywords: s.array(s.string()),
  _keysMap: {
    keywordType: "keyword_type",
    messageType: "message_type",
  },
});
