import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CatalogItem = {
  id?: string;
  sectionTitle?: string;
  name?: string;
  mediaUrl?: string;
  price?: number;
  description?: string;
};

export const catalogItemSchema: Schema<CatalogItem> = s.object<CatalogItem>({
  id: s.optional(s.string()),
  sectionTitle: s.optional(s.string()),
  name: s.optional(s.string()),
  mediaUrl: s.optional(s.string()),
  price: s.optional(s.number()),
  description: s.optional(s.string()),
  _keysMap: {
    sectionTitle: "section_title",
    mediaUrl: "media_url",
  },
});
