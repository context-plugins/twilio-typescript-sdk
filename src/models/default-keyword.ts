import { s, type Schema } from "../core/index.js";

export type DefaultKeyword = {
  keyword?: string;
  messageType?: string;
  language?: string;
  message?: string;
};

export const defaultKeywordSchema: Schema<DefaultKeyword> = s.object<DefaultKeyword>({
  keyword: s.optional(s.string()),
  messageType: s.optional(s.string()),
  language: s.optional(s.string()),
  message: s.optional(s.string()),
});
