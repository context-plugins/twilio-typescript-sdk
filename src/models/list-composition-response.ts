import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { videoV1CompositionSchema, type VideoV1Composition } from "./video-v1-composition.js";

export type ListCompositionResponse = {
  compositions?: VideoV1Composition[];
  meta?: Meta;
};

export const listCompositionResponseSchema: Schema<ListCompositionResponse> =
  s.object<ListCompositionResponse>({
    compositions: s.optional(s.array(s.lazy(() => videoV1CompositionSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
