import { s, type Schema } from "../core/index.js";
import { shortCodeApplicationSchema, type ShortCodeApplication } from "./short-code-application.js";

export type ShortCodeApplicationResponsePage = {
  totalElements?: number;
  totalPages?: number;
  currentPage?: number;
  perPage?: number;
  hasNext?: boolean;
  hasPrev?: boolean;
  results?: ShortCodeApplication[];
};

export const shortCodeApplicationResponsePageSchema: Schema<ShortCodeApplicationResponsePage> =
  s.object<ShortCodeApplicationResponsePage>({
    totalElements: s.optional(s.number()),
    totalPages: s.optional(s.number()),
    currentPage: s.optional(s.number()),
    perPage: s.optional(s.number()),
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
