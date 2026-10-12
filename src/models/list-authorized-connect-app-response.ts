import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV2010AccountAuthorizedConnectAppSchema,
  type ApiV2010AccountAuthorizedConnectApp,
} from "./api-v2010-account-authorized-connect-app.js";

export type ListAuthorizedConnectAppResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  authorizedConnectApps?: ApiV2010AccountAuthorizedConnectApp[];
};

export const listAuthorizedConnectAppResponseSchema: Schema<ListAuthorizedConnectAppResponse> =
  s.object<ListAuthorizedConnectAppResponse>({
    end: s.optional(s.int()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.int()),
    pageSize: s.optional(s.int()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.int()),
    uri: s.optional(s.string()),
    authorizedConnectApps: s.optional(s.array(s.lazy(() => apiV2010AccountAuthorizedConnectAppSchema))),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
      authorizedConnectApps: "authorized_connect_apps",
    },
  });
