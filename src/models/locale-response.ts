import { s, type Schema } from "../core/index.js";
import { languagePropertiesSchema, type LanguageProperties } from "./language-properties.js";

export type LocaleResponse = {
  languages: LanguageProperties[];
};

export const localeResponseSchema: Schema<LocaleResponse> = s.object<LocaleResponse>({
  languages: s.array(s.lazy(() => languagePropertiesSchema)),
});
