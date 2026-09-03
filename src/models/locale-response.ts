import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { languagePropertiesSchema, type LanguageProperties } from "./language-properties.js";

export type LocaleResponse = {
  languages: LanguageProperties[];
};

export const localeResponseSchema: Schema<LocaleResponse> = s.object<LocaleResponse>({
  languages: s.array(s.lazy(() => languagePropertiesSchema)),
});
