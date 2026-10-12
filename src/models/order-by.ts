import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bundleEnumSortDirectionSchema, type BundleEnumSortDirection } from "./bundle-enum-sort-direction.js";

export type OrderBy = {
  /** Dimension or measure to order by */
  field?: string;
  /** Sort order direction, ascending or descending */
  direction?: BundleEnumSortDirection;
};

export const orderBySchema: Schema<OrderBy> = s.object<OrderBy>({
  field: s.optional(s.string()),
  direction: s.optional(s.lazy(() => bundleEnumSortDirectionSchema)),
});
