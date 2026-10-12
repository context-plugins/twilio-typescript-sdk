import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  insightsV1VideoRoomSummarySchema,
  type InsightsV1VideoRoomSummary,
} from "../models/insights-v1-video-room-summary.js";
import {
  listVideoRoomSummaryResponseSchema,
  type ListVideoRoomSummaryResponse,
} from "../models/list-video-room-summary-response.js";
import {
  videoRoomSummaryEnumCodecSchema,
  type VideoRoomSummaryEnumCodec,
} from "../models/video-room-summary-enum-codec.js";
import {
  videoRoomSummaryEnumRoomTypeSchema,
  type VideoRoomSummaryEnumRoomType,
} from "../models/video-room-summary-enum-room-type.js";
import type { Servers } from "../servers.js";

export class InsightsV1Room {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Video Log Analyzer data for a Room.
   *
   * @remarks
   * Get Video Log Analyzer data for a Room.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchVideoRoomSummary(
    request: InsightsV1Room.FetchVideoRoomSummaryRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsV1VideoRoomSummary, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default14("/v1/Video/Rooms/{RoomSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "RoomSid", value: request.roomSid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsV1VideoRoomSummarySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get a list of Programmable Video Rooms.
   *
   * @remarks
   * Get a list of Programmable Video Rooms.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listVideoRoomSummary(
    request: InsightsV1Room.ListVideoRoomSummaryRequest,
    options?: RequestOptions,
  ): ApiPromise<ListVideoRoomSummaryResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default14("/v1/Video/Rooms"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          {
            name: "RoomType",
            value: request.roomType,
            schema: s.optional(s.array(s.lazy(() => videoRoomSummaryEnumRoomTypeSchema))),
          },
          {
            name: "Codec",
            value: request.codec,
            schema: s.optional(s.array(s.lazy(() => videoRoomSummaryEnumCodecSchema))),
          },
          { name: "RoomName", value: request.roomName, schema: s.optional(s.string()) },
          { name: "CreatedAfter", value: request.createdAfter, schema: s.optional(s.dateTime()) },
          { name: "CreatedBefore", value: request.createdBefore, schema: s.optional(s.dateTime()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listVideoRoomSummaryResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace InsightsV1Room {
  export type FetchVideoRoomSummaryRequest = {
    /** The SID of the Room resource. */
    roomSid: string;
  };

  export type ListVideoRoomSummaryRequest = {
    /** Type of room. Can be `go`, `peer_to_peer`, `group`, or `group_small`. */
    roomType?: VideoRoomSummaryEnumRoomType[];
    /** Codecs used by participants in the room. Can be `VP8`, `H264`, or `VP9`. */
    codec?: VideoRoomSummaryEnumCodec[];
    /** Room friendly name. */
    roomName?: string;
    /** Only read rooms that started on or after this ISO 8601 timestamp. */
    createdAfter?: Date;
    /** Only read rooms that started before this ISO 8601 timestamp. */
    createdBefore?: Date;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };
}
