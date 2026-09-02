import { s, type Schema } from "../core/index.js";
import { defaultKeywordSchema, type DefaultKeyword } from "./default-keyword.js";

export type OptOutDefaultKeywordMessageResponse = {
  defaultKeywords?: DefaultKeyword[];
};

export const optOutDefaultKeywordMessageResponseSchema: Schema<OptOutDefaultKeywordMessageResponse> =
  s.object<OptOutDefaultKeywordMessageResponse>({
    defaultKeywords: s.optional(s.array(s.lazy(() => defaultKeywordSchema))),
  });
