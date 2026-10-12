import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Individual keyword configuration */
export type KeywordItem = {
  /** The actual keyword text */
  keyword: string;
  /** Indicates whether this keyword is reserved by the system and cannot be modified */
  reserved: boolean;
};

export const keywordItemSchema: Schema<KeywordItem> = s.object<KeywordItem>({
  keyword: s.string(),
  reserved: s.boolean(),
});
