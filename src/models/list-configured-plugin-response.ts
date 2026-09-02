import { s, type Schema } from "../core/index.js";
import {
  flexV1PluginConfigurationConfiguredPluginSchema,
  type FlexV1PluginConfigurationConfiguredPlugin,
} from "./flex-v1-plugin-configuration-configured-plugin.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListConfiguredPluginResponse = {
  plugins?: FlexV1PluginConfigurationConfiguredPlugin[];
  meta?: Meta;
};

export const listConfiguredPluginResponseSchema: Schema<ListConfiguredPluginResponse> =
  s.object<ListConfiguredPluginResponse>({
    plugins: s.optional(s.array(s.lazy(() => flexV1PluginConfigurationConfiguredPluginSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
