import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV2010AccountTranscriptionSchema,
  type ApiV2010AccountTranscription,
} from "./api-v2010-account-transcription.js";

export type ListTranscriptionResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  transcriptions?: ApiV2010AccountTranscription[];
};

export const listTranscriptionResponseSchema: Schema<ListTranscriptionResponse> =
  s.object<ListTranscriptionResponse>({
    end: s.optional(s.number()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.number()),
    pageSize: s.optional(s.number()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.number()),
    uri: s.optional(s.string()),
    transcriptions: s.optional(s.array(s.lazy(() => apiV2010AccountTranscriptionSchema))),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
    },
  });
