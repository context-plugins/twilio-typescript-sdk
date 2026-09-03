import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type KeywordItem = {
  keyword: string;
  reserved: boolean;
};

export const keywordItemSchema: Schema<KeywordItem> = s.object<KeywordItem>({
  keyword: s.string(),
  reserved: s.boolean(),
});
