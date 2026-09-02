import { s, type Schema } from "../core/index.js";
import { bundleEnumSortDirectionSchema, type BundleEnumSortDirection } from "./bundle-enum-sort-direction.js";

export type OrderBy = {
  field?: string;
  direction?: BundleEnumSortDirection;
};

export const orderBySchema: Schema<OrderBy> = s.object<OrderBy>({
  field: s.optional(s.string()),
  direction: s.optional(s.lazy(() => bundleEnumSortDirectionSchema)),
});
