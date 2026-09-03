import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogItemSchema, type CatalogItem } from "./catalog-item.js";

export type TwilioCatalog = {
  title?: string;
  body: string;
  subtitle?: string;
  id?: string;
  items?: CatalogItem[];
  dynamicItems?: string;
};

export const twilioCatalogSchema: Schema<TwilioCatalog> = s.object<TwilioCatalog>({
  title: s.optional(s.string()),
  body: s.string(),
  subtitle: s.optional(s.string()),
  id: s.optional(s.string()),
  items: s.optional(s.array(s.lazy(() => catalogItemSchema))),
  dynamicItems: s.optional(s.string()),
  _keysMap: {
    dynamicItems: "dynamic_items",
  },
});
