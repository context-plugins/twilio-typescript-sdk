import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { defaultKeywordSchema, type DefaultKeyword } from "./default-keyword.js";

export type OptOutDefaultKeywordMessageResponse = {
  defaultKeywords?: DefaultKeyword[];
};

export const optOutDefaultKeywordMessageResponseSchema: Schema<OptOutDefaultKeywordMessageResponse> =
  s.object<OptOutDefaultKeywordMessageResponse>({
    defaultKeywords: s.optional(s.array(s.lazy(() => defaultKeywordSchema))),
  });
