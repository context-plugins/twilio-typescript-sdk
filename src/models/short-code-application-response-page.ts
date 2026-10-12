import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shortCodeApplicationSchema, type ShortCodeApplication } from "./short-code-application.js";

export type ShortCodeApplicationResponsePage = {
  totalElements?: number;
  totalPages?: number;
  currentPage?: number;
  perPage?: number;
  hasNext?: boolean;
  hasPrev?: boolean;
  /** List of Short Code Applications. */
  results?: ShortCodeApplication[];
};

export const shortCodeApplicationResponsePageSchema: Schema<ShortCodeApplicationResponsePage> =
  s.object<ShortCodeApplicationResponsePage>({
    totalElements: s.optional(s.int()),
    totalPages: s.optional(s.int()),
    currentPage: s.optional(s.int()),
    perPage: s.optional(s.int()),
    hasNext: s.optional(s.boolean()),
    hasPrev: s.optional(s.boolean()),
    results: s.optional(s.array(s.lazy(() => shortCodeApplicationSchema))),
    _keysMap: {
      totalElements: "total_elements",
      totalPages: "total_pages",
      currentPage: "current_page",
      perPage: "per_page",
      hasNext: "has_next",
      hasPrev: "has_prev",
    },
  });
