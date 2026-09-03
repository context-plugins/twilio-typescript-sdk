import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OptOutKeywordsEntity = {
  keywordType: string;
  messageType: string;
  keyword: string;
};

export const optOutKeywordsEntitySchema: Schema<OptOutKeywordsEntity> = s.object<OptOutKeywordsEntity>({
  keywordType: s.string(),
  messageType: s.string(),
  keyword: s.string(),
});
