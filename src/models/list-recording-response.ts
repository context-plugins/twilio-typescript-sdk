import { s, type Schema } from "../core/index.js";
import {
  apiV2010AccountRecordingSchema,
  type ApiV2010AccountRecording,
} from "./api-v2010-account-recording.js";

export type ListRecordingResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  recordings?: ApiV2010AccountRecording[];
};

export const listRecordingResponseSchema: Schema<ListRecordingResponse> = s.object<ListRecordingResponse>({
  end: s.optional(s.number()),
  firstPageUri: s.optional(s.string()),
  nextPageUri: s.optionalNullable(s.string()),
  page: s.optional(s.number()),
  pageSize: s.optional(s.number()),
  previousPageUri: s.optionalNullable(s.string()),
  start: s.optional(s.number()),
  uri: s.optional(s.string()),
  recordings: s.optional(s.array(s.lazy(() => apiV2010AccountRecordingSchema))),
  _keysMap: {
    firstPageUri: "first_page_uri",
    nextPageUri: "next_page_uri",
    pageSize: "page_size",
    previousPageUri: "previous_page_uri",
  },
});
