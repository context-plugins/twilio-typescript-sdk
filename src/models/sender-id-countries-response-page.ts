import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paginationMetaSchema, type PaginationMeta } from "./pagination-meta.js";
import { senderIdCountrySchema, type SenderIdCountry } from "./sender-id-country.js";

export type SenderIdCountriesResponsePage = {
  /** List of countries associated with the Sender ID. */
  results?: SenderIdCountry[];
  meta?: PaginationMeta;
};

export const senderIdCountriesResponsePageSchema: Schema<SenderIdCountriesResponsePage> =
  s.object<SenderIdCountriesResponsePage>({
    results: s.optional(s.array(s.lazy(() => senderIdCountrySchema))),
    meta: s.optional(s.lazy(() => paginationMetaSchema)),
  });
