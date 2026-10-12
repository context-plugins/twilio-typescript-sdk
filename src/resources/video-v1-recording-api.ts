import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Delete a Recording resource identified by a Recording SID.
   *
   * @remarks
   * Delete a Recording resource identified by a Recording SID.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteRecording2(
    request: VideoV1RecordingApi.DeleteRecording2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default6("/v1/Recordings/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Returns a single Recording resource identified by a Recording SID.
   *
   * @remarks
   * Returns a single Recording resource identified by a Recording SID.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchRecording2(
    request: VideoV1RecordingApi.FetchRecording2Request,
    options?: RequestOptions,
  ): ApiPromise<VideoV1Recording, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default6("/v1/Recordings/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoV1RecordingSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List of all Track recordings.
   *
   * @remarks
   * List of all Track recordings.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRecording2(
    request: VideoV1RecordingApi.ListRecording2Request,
    options?: RequestOptions,
  ): ApiPromise<ListRecordingResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default6("/v1/Recordings"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
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
          { name: "PageSize", value: request.pageSize, schema: s.defaulted(s.int(), 50) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listRecordingResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VideoV1RecordingApi {
  export type DeleteRecording2Request = {
    /** The SID of the Recording resource to delete. */
    sid: string;
  };

  export type FetchRecording2Request = {
    /** The SID of the Recording resource to fetch. */
    sid: string;
  };

  export type ListRecording2Request = {
    /**
     * Read only the recordings that have this status. Can be: `processing`, `completed`, or
     * `deleted`.
     */
    status?: RecordingEnumStatus1;
    /** Read only the recordings that have this `source_sid`. */
    sourceSid?: string;
    /**
     * Read only recordings with this `grouping_sid`, which may include a `participant_sid` and/or a
     * `room_sid`.
     */
    groupingSid?: string[];
    /**
     * Read only recordings that started on or after this [ISO
     * 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time zone.
     */
    dateCreatedAfter?: Date;
    /**
     * Read only recordings that started before this [ISO
     * 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time with time zone, given as
     * `YYYY-MM-DDThh:mm:ss+|-hh:mm` or `YYYY-MM-DDThh:mm:ssZ`.
     */
    dateCreatedBefore?: Date;
    /** Read only recordings that have this media type. Can be either `audio` or `video`. */
    mediaType?: RecordingEnumType;
    /** How many resources to return in each list page. @default 50 */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };
}
