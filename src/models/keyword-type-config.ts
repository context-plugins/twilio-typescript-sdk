import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { keywordItemSchema, type KeywordItem } from "./keyword-item.js";

/** Configuration for a specific keyword type (STOP, START, HELP, etc.) */
export type KeywordTypeConfig = {
  /** List of keywords associated with this keyword type */
  keywords: KeywordItem[];
  /** The response message sent when any keyword of this type is received */
  message: string;
};

export const keywordTypeConfigSchema: Schema<KeywordTypeConfig> = s.object<KeywordTypeConfig>({
  keywords: s.array(s.lazy(() => keywordItemSchema)),
  message: s.string(),
});
