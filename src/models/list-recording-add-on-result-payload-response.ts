import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayloadSchema,
  type ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload,
} from "./api-v2010-account-recording-recording-add-on-result-recording-add-on-result-payload.js";

export type ListRecordingAddOnResultPayloadResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  payloads?: ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload[];
};

export const listRecordingAddOnResultPayloadResponseSchema: Schema<ListRecordingAddOnResultPayloadResponse> =
  s.object<ListRecordingAddOnResultPayloadResponse>({
    end: s.optional(s.number()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.number()),
    pageSize: s.optional(s.number()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.number()),
    uri: s.optional(s.string()),
    payloads: s.optional(
      s.array(s.lazy(() => apiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayloadSchema)),
    ),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
    },
  });
