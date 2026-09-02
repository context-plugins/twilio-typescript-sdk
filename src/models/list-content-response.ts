import { s, type Schema } from "../core/index.js";
import { contentV1ContentSchema, type ContentV1Content } from "./content-v1-content.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListContentResponse = {
  contents?: ContentV1Content[];
  meta?: Meta;
};

export const listContentResponseSchema: Schema<ListContentResponse> = s.object<ListContentResponse>({
  contents: s.optional(s.array(s.lazy(() => contentV1ContentSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
