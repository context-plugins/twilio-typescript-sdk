import { s, type Schema } from "../core/index.js";
import {
  flexV1PluginConfigurationSchema,
  type FlexV1PluginConfiguration,
} from "./flex-v1-plugin-configuration.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListPluginConfigurationResponse = {
  configurations?: FlexV1PluginConfiguration[];
  meta?: Meta;
};

export const listPluginConfigurationResponseSchema: Schema<ListPluginConfigurationResponse> =
  s.object<ListPluginConfigurationResponse>({
    configurations: s.optional(s.array(s.lazy(() => flexV1PluginConfigurationSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
