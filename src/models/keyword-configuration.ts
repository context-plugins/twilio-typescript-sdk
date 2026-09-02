import { s, type Schema } from "../core/index.js";

export type KeywordConfiguration = {
  keywordType: string;
  messageType: string;
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
