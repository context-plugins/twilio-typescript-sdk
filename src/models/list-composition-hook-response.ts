import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { videoV1CompositionHookSchema, type VideoV1CompositionHook } from "./video-v1-composition-hook.js";

export type ListCompositionHookResponse = {
  compositionHooks?: VideoV1CompositionHook[];
  meta?: Meta;
};

export const listCompositionHookResponseSchema: Schema<ListCompositionHookResponse> =
  s.object<ListCompositionHookResponse>({
    compositionHooks: s.optional(s.array(s.lazy(() => videoV1CompositionHookSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
    _keysMap: {
      compositionHooks: "composition_hooks",
    },
  });
