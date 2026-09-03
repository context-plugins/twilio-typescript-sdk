import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listRecordingResponse1Schema,
  type ListRecordingResponse1,
} from "../models/list-recording-response1.js";
import { recordingEnumStatus1Schema, type RecordingEnumStatus1 } from "../models/recording-enum-status1.js";
import { recordingEnumTypeSchema, type RecordingEnumType } from "../models/recording-enum-type.js";
import { videoV1RecordingSchema, type VideoV1Recording } from "../models/video-v1-recording.js";
import type { Servers } from "../servers.js";

export class VideoV1RecordingApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteRecording2(
    request: VideoV1RecordingApi.DeleteRecording2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default6("/v1/Recordings/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchRecording2(
    request: VideoV1RecordingApi.FetchRecording2Request,
    options?: RequestOptions,
  ): ApiPromise<VideoV1Recording, ResponseError> {
    return this.#rawClient.execute<VideoV1Recording, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default6("/v1/Recordings/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoV1RecordingSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listRecording2(
    request: VideoV1RecordingApi.ListRecording2Request,
    options?: RequestOptions,
  ): ApiPromise<ListRecordingResponse1, ResponseError> {
    return this.#rawClient.execute<ListRecordingResponse1, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default6("/v1/Recordings"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          {
            name: "Status",
            value: request.status,
            schema: s.optional(s.lazy(() => recordingEnumStatus1Schema)),
          },
          { name: "SourceSid", value: request.sourceSid, schema: s.optional(s.string()) },
          { name: "GroupingSid", value: request.groupingSid, schema: s.optional(s.array(s.string())) },
          { name: "DateCreatedAfter", value: request.dateCreatedAfter, schema: s.optional(s.dateTime()) },
          { name: "DateCreatedBefore", value: request.dateCreatedBefore, schema: s.optional(s.dateTime()) },
          {
            name: "MediaType",
            value: request.mediaType,
            schema: s.optional(s.lazy(() => recordingEnumTypeSchema)),
          },
          { name: "PageSize", value: request.pageSize, schema: s.defaulted(s.number(), 50) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listRecordingResponse1Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VideoV1RecordingApi {
  export type DeleteRecording2Request = {
    sid: string;
  };

  export type FetchRecording2Request = {
    sid: string;
  };

  export type ListRecording2Request = {
    status?: RecordingEnumStatus1;
    sourceSid?: string;
    groupingSid?: string[];
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    mediaType?: RecordingEnumType;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
