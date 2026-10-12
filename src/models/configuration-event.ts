import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { languagesSchema, type Languages } from "./languages.js";

export type ConfigurationEvent = {
  /** Key-value pairs for configuration settings. */
  configurations?: Record<string, string>;
  /** Key-value pairs for language configurations. */
  languages?: Record<string, Languages>;
};

export const configurationEventSchema: Schema<ConfigurationEvent> = s.object<ConfigurationEvent>({
  configurations: s.optional(s.record(s.string(), s.string())),
  languages: s.optional(
    s.record(
      s.string(),
      s.lazy(() => languagesSchema),
    ),
  ),
});
