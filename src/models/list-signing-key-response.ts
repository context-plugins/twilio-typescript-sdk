import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV2010AccountSigningKeySchema,
  type ApiV2010AccountSigningKey,
} from "./api-v2010-account-signing-key.js";

export type ListSigningKeyResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  signingKeys?: ApiV2010AccountSigningKey[];
};

export const listSigningKeyResponseSchema: Schema<ListSigningKeyResponse> = s.object<ListSigningKeyResponse>({
  end: s.optional(s.number()),
  firstPageUri: s.optional(s.string()),
  nextPageUri: s.optionalNullable(s.string()),
  page: s.optional(s.number()),
  pageSize: s.optional(s.number()),
  previousPageUri: s.optionalNullable(s.string()),
  start: s.optional(s.number()),
  uri: s.optional(s.string()),
  signingKeys: s.optional(s.array(s.lazy(() => apiV2010AccountSigningKeySchema))),
  _keysMap: {
    firstPageUri: "first_page_uri",
    nextPageUri: "next_page_uri",
    pageSize: "page_size",
    previousPageUri: "previous_page_uri",
    signingKeys: "signing_keys",
  },
});
