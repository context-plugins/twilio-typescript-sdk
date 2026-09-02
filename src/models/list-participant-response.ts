import { s, type Schema } from "../core/index.js";
import {
  apiV2010AccountConferenceParticipantSchema,
  type ApiV2010AccountConferenceParticipant,
} from "./api-v2010-account-conference-participant.js";

export type ListParticipantResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  participants?: ApiV2010AccountConferenceParticipant[];
};

export const listParticipantResponseSchema: Schema<ListParticipantResponse> =
  s.object<ListParticipantResponse>({
    end: s.optional(s.number()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.number()),
    pageSize: s.optional(s.number()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.number()),
    uri: s.optional(s.string()),
    participants: s.optional(s.array(s.lazy(() => apiV2010AccountConferenceParticipantSchema))),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
    },
  });
