import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  fetchVideoRoomSummary(
    request: InsightsV1Room.FetchVideoRoomSummaryRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsV1VideoRoomSummary, ResponseError> {
    return this.#rawClient.execute<InsightsV1VideoRoomSummary, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default14("/v1/Video/Rooms/{RoomSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "RoomSid", value: request.roomSid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsV1VideoRoomSummarySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listVideoRoomSummary(
    request: InsightsV1Room.ListVideoRoomSummaryRequest,
    options?: RequestOptions,
  ): ApiPromise<ListVideoRoomSummaryResponse, ResponseError> {
    return this.#rawClient.execute<ListVideoRoomSummaryResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default14("/v1/Video/Rooms"),
        auth: this.#auth.accountSidAuthToken,
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
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listVideoRoomSummaryResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace InsightsV1Room {
  export type FetchVideoRoomSummaryRequest = {
    roomSid: string;
  };

  export type ListVideoRoomSummaryRequest = {
    roomType?: VideoRoomSummaryEnumRoomType[];
    codec?: VideoRoomSummaryEnumCodec[];
    roomName?: string;
    createdAfter?: Date;
    createdBefore?: Date;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
