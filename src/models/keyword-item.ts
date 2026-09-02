import { s, type Schema } from "../core/index.js";

export type KeywordItem = {
  keyword: string;
  reserved: boolean;
};

export const keywordItemSchema: Schema<KeywordItem> = s.object<KeywordItem>({
  keyword: s.string(),
  reserved: s.boolean(),
});
