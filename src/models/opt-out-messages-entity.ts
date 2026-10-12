import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OptOutMessagesEntity = {
  /**
   * Combination of KeywordType and Locale in format: {KeywordType}.{Locale}
   *
   * Valid KeywordTypes: STOP, START, HELP Valid Locales: See LocaleEnum for full list
   *
   * Examples: STOP.ENGLISH, START.SPANISH, HELP.FRENCH
   */
  keywordType: string;
  /** Message type (typically country code or region identifier) */
  messageType: string;
  /** The message text content (max 320 characters) */
  message: string;
};

export const optOutMessagesEntitySchema: Schema<OptOutMessagesEntity> = s.object<OptOutMessagesEntity>({
  keywordType: s.string(),
  messageType: s.string(),
  message: s.string(),
});
