import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DefaultKeyword = {
  /** The opt-out keyword */
  keyword?: string;
  /** The type of message (SMS, etc.) */
  messageType?: string;
  /** Language code for the message */
  language?: string;
  /** The default response message sent when this keyword is used */
  message?: string;
};

export const defaultKeywordSchema: Schema<DefaultKeyword> = s.object<DefaultKeyword>({
  keyword: s.optional(s.string()),
  messageType: s.optional(s.string()),
  language: s.optional(s.string()),
  message: s.optional(s.string()),
});
