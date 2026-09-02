import { s, type Schema } from "../core/index.js";
import {
  apiV2010AccountNotificationSchema,
  type ApiV2010AccountNotification,
} from "./api-v2010-account-notification.js";

export type ListNotificationResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  notifications?: ApiV2010AccountNotification[];
};

export const listNotificationResponseSchema: Schema<ListNotificationResponse> =
  s.object<ListNotificationResponse>({
    end: s.optional(s.number()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.number()),
    pageSize: s.optional(s.number()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.number()),
    uri: s.optional(s.string()),
    notifications: s.optional(s.array(s.lazy(() => apiV2010AccountNotificationSchema))),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
    },
  });
