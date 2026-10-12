import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  sipAuthRegistrationsCredentialListMappingSchema,
  type SipAuthRegistrationsCredentialListMapping,
} from "./sip-auth-registrations-credential-list-mapping.js";

export type ListSipAuthRegistrationsCredentialListMappingResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  contents?: SipAuthRegistrationsCredentialListMapping[];
};

export const listSipAuthRegistrationsCredentialListMappingResponseSchema: Schema<ListSipAuthRegistrationsCredentialListMappingResponse> =
  s.object<ListSipAuthRegistrationsCredentialListMappingResponse>({
    end: s.optional(s.int()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.int()),
    pageSize: s.optional(s.int()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.int()),
    uri: s.optional(s.string()),
    contents: s.optional(s.array(s.lazy(() => sipAuthRegistrationsCredentialListMappingSchema))),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
    },
  });
