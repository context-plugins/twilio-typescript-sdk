import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { flexV1PluginSchema, type FlexV1Plugin } from "./flex-v1-plugin.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListPluginResponse = {
  plugins?: FlexV1Plugin[];
  meta?: Meta;
};

export const listPluginResponseSchema: Schema<ListPluginResponse> = s.object<ListPluginResponse>({
  plugins: s.optional(s.array(s.lazy(() => flexV1PluginSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
