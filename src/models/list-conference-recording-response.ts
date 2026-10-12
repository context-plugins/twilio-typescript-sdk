import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV2010AccountConferenceConferenceRecordingSchema,
  type ApiV2010AccountConferenceConferenceRecording,
} from "./api-v2010-account-conference-conference-recording.js";

export type ListConferenceRecordingResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  recordings?: ApiV2010AccountConferenceConferenceRecording[];
};

export const listConferenceRecordingResponseSchema: Schema<ListConferenceRecordingResponse> =
  s.object<ListConferenceRecordingResponse>({
    end: s.optional(s.int()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.int()),
    pageSize: s.optional(s.int()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.int()),
    uri: s.optional(s.string()),
    recordings: s.optional(s.array(s.lazy(() => apiV2010AccountConferenceConferenceRecordingSchema))),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
    },
  });
