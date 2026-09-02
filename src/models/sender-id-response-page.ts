import { s, type Schema } from "../core/index.js";
import { paginationMetaSchema, type PaginationMeta } from "./pagination-meta.js";
import { senderIdSchema, type SenderId } from "./sender-id.js";

export type SenderIdResponsePage = {
  results?: SenderId[];
  meta?: PaginationMeta;
};

export const senderIdResponsePageSchema: Schema<SenderIdResponsePage> = s.object<SenderIdResponsePage>({
  results: s.optional(s.array(s.lazy(() => senderIdSchema))),
  meta: s.optional(s.lazy(() => paginationMetaSchema)),
});
