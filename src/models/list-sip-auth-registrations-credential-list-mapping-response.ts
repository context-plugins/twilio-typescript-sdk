import { s, type Schema } from "../core/index.js";
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
    end: s.optional(s.number()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.number()),
    pageSize: s.optional(s.number()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.number()),
    uri: s.optional(s.string()),
    contents: s.optional(s.array(s.lazy(() => sipAuthRegistrationsCredentialListMappingSchema))),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
    },
  });
