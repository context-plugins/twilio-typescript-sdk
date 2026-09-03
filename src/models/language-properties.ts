import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { keySchema, type Key } from "./key.js";

export type LanguageProperties = {
  key: Key;
  friendlyName: string;
};

export const languagePropertiesSchema: Schema<LanguageProperties> = s.object<LanguageProperties>({
  key: keySchema,
  friendlyName: s.string(),
  _keysMap: {
    friendlyName: "friendly_name",
  },
});
