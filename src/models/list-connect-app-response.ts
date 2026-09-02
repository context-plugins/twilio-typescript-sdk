import { s, type Schema } from "../core/index.js";
import {
  apiV2010AccountConnectAppSchema,
  type ApiV2010AccountConnectApp,
} from "./api-v2010-account-connect-app.js";

export type ListConnectAppResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  connectApps?: ApiV2010AccountConnectApp[];
};

export const listConnectAppResponseSchema: Schema<ListConnectAppResponse> = s.object<ListConnectAppResponse>({
  end: s.optional(s.number()),
  firstPageUri: s.optional(s.string()),
  nextPageUri: s.optionalNullable(s.string()),
  page: s.optional(s.number()),
  pageSize: s.optional(s.number()),
  previousPageUri: s.optionalNullable(s.string()),
  start: s.optional(s.number()),
  uri: s.optional(s.string()),
  connectApps: s.optional(s.array(s.lazy(() => apiV2010AccountConnectAppSchema))),
  _keysMap: {
    firstPageUri: "first_page_uri",
    nextPageUri: "next_page_uri",
    pageSize: "page_size",
    previousPageUri: "previous_page_uri",
    connectApps: "connect_apps",
  },
});
