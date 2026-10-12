import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OptOutKeywordsEntity = {
  /**
   * Combination of KeywordType and Locale in format: {KeywordType}.{Locale}
   *
   * Valid KeywordTypes: STOP, START, HELP Valid Locales: See LocaleEnum for full list
   *
   * Examples: STOP.ENGLISH, START.SPANISH, HELP.FRENCH
   */
  keywordType: string;
  /** The message type identifier (typically country codes or special identifiers) */
  messageType: string;
  /** The keyword to add */
  keyword: string;
};

export const optOutKeywordsEntitySchema: Schema<OptOutKeywordsEntity> = s.object<OptOutKeywordsEntity>({
  keywordType: s.string(),
  messageType: s.string(),
  keyword: s.string(),
});
