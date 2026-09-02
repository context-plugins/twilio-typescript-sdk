import { s, type Schema } from "../core/index.js";
import { keywordItemSchema, type KeywordItem } from "./keyword-item.js";

export type KeywordTypeConfig = {
  keywords: KeywordItem[];
  message: string;
};

export const keywordTypeConfigSchema: Schema<KeywordTypeConfig> = s.object<KeywordTypeConfig>({
  keywords: s.array(s.lazy(() => keywordItemSchema)),
  message: s.string(),
});
