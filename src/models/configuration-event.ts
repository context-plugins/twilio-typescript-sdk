import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { languagesSchema, type Languages } from "./languages.js";

export type ConfigurationEvent = {
  configurations?: Record<string, string>;
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
