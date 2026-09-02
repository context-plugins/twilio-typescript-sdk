import { s, type Schema } from "../core/index.js";
import {
  flexV1PluginPluginVersionSchema,
  type FlexV1PluginPluginVersion,
} from "./flex-v1-plugin-plugin-version.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListPluginVersionResponse = {
  pluginVersions?: FlexV1PluginPluginVersion[];
  meta?: Meta;
};

export const listPluginVersionResponseSchema: Schema<ListPluginVersionResponse> =
  s.object<ListPluginVersionResponse>({
    pluginVersions: s.optional(s.array(s.lazy(() => flexV1PluginPluginVersionSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
    _keysMap: {
      pluginVersions: "plugin_versions",
    },
  });
