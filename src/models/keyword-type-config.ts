import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { keywordItemSchema, type KeywordItem } from "./keyword-item.js";

export type KeywordTypeConfig = {
  keywords: KeywordItem[];
  message: string;
};

export const keywordTypeConfigSchema: Schema<KeywordTypeConfig> = s.object<KeywordTypeConfig>({
  keywords: s.array(s.lazy(() => keywordItemSchema)),
  message: s.string(),
});
