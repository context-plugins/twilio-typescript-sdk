import { s, type Schema } from "../core/index.js";
import {
  apiV2010AccountQueueMemberSchema,
  type ApiV2010AccountQueueMember,
} from "./api-v2010-account-queue-member.js";

export type ListMemberResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  queueMembers?: ApiV2010AccountQueueMember[];
};

export const listMemberResponseSchema: Schema<ListMemberResponse> = s.object<ListMemberResponse>({
  end: s.optional(s.number()),
  firstPageUri: s.optional(s.string()),
  nextPageUri: s.optionalNullable(s.string()),
  page: s.optional(s.number()),
  pageSize: s.optional(s.number()),
  previousPageUri: s.optionalNullable(s.string()),
  start: s.optional(s.number()),
  uri: s.optional(s.string()),
  queueMembers: s.optional(s.array(s.lazy(() => apiV2010AccountQueueMemberSchema))),
  _keysMap: {
    firstPageUri: "first_page_uri",
    nextPageUri: "next_page_uri",
    pageSize: "page_size",
    previousPageUri: "previous_page_uri",
    queueMembers: "queue_members",
  },
});
