import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { flexV1PluginReleaseSchema, type FlexV1PluginRelease } from "./flex-v1-plugin-release.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListPluginReleaseResponse = {
  releases?: FlexV1PluginRelease[];
  meta?: Meta;
};

export const listPluginReleaseResponseSchema: Schema<ListPluginReleaseResponse> =
  s.object<ListPluginReleaseResponse>({
    releases: s.optional(s.array(s.lazy(() => flexV1PluginReleaseSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
