import { s, type Schema } from "../core/index.js";
import { contentV1LegacyContentSchema, type ContentV1LegacyContent } from "./content-v1-legacy-content.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListLegacyContentResponse = {
  contents?: ContentV1LegacyContent[];
  meta?: Meta;
};

export const listLegacyContentResponseSchema: Schema<ListLegacyContentResponse> =
  s.object<ListLegacyContentResponse>({
    contents: s.optional(s.array(s.lazy(() => contentV1LegacyContentSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
