import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  amdStatusCallbackMethodSchema,
  type AmdStatusCallbackMethod,
} from "../models/amd-status-callback-method.js";
import {
  compositionEnumFormatSchema,
  type CompositionEnumFormat,
} from "../models/composition-enum-format.js";
import {
  compositionEnumStatusSchema,
  type CompositionEnumStatus,
} from "../models/composition-enum-status.js";
import {
  listCompositionResponseSchema,
  type ListCompositionResponse,
} from "../models/list-composition-response.js";
import { videoV1CompositionSchema, type VideoV1Composition } from "../models/video-v1-composition.js";
import type { Servers } from "../servers.js";

export class VideoV1CompositionApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createComposition(
    request: VideoV1CompositionApi.CreateCompositionRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1Composition, ResponseError> {
    return this.#rawClient.execute<VideoV1Composition, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default6("/v1/Compositions"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "RoomSid", value: request.roomSid, schema: s.string() },
            {
              name: "VideoLayout",
              value: request.videoLayout,
              schema: s.optional(s.record(s.string(), s.unknown())),
            },
            { name: "AudioSources", value: request.audioSources, schema: s.optional(s.array(s.string())) },
            {
              name: "AudioSourcesExcluded",
              value: request.audioSourcesExcluded,
              schema: s.optional(s.array(s.string())),
            },
            { name: "Resolution", value: request.resolution, schema: s.optional(s.string()) },
            {
              name: "Format",
              value: request.format,
              schema: s.optional(s.lazy(() => compositionEnumFormatSchema)),
            },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            {
              name: "StatusCallbackMethod",
              value: request.statusCallbackMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            { name: "Trim", value: request.trim, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: videoV1CompositionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteComposition(
    request: VideoV1CompositionApi.DeleteCompositionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default6("/v1/Compositions/{Sid}"),
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

  fetchComposition(
    request: VideoV1CompositionApi.FetchCompositionRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1Composition, ResponseError> {
    return this.#rawClient.execute<VideoV1Composition, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default6("/v1/Compositions/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoV1CompositionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listComposition(
    request: VideoV1CompositionApi.ListCompositionRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCompositionResponse, ResponseError> {
    return this.#rawClient.execute<ListCompositionResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default6("/v1/Compositions"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          {
            name: "Status",
            value: request.status,
            schema: s.optional(s.lazy(() => compositionEnumStatusSchema)),
          },
          { name: "DateCreatedAfter", value: request.dateCreatedAfter, schema: s.optional(s.dateTime()) },
          { name: "DateCreatedBefore", value: request.dateCreatedBefore, schema: s.optional(s.dateTime()) },
          { name: "RoomSid", value: request.roomSid, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.defaulted(s.number(), 50) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCompositionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VideoV1CompositionApi {
  export type CreateCompositionRequest = {
    roomSid: string;
    videoLayout?: Record<string, unknown>;
    audioSources?: string[];
    audioSourcesExcluded?: string[];
    resolution?: string;
    format?: CompositionEnumFormat;
    statusCallback?: string;
    statusCallbackMethod?: AmdStatusCallbackMethod;
    trim?: boolean;
  };

  export type DeleteCompositionRequest = {
    sid: string;
  };

  export type FetchCompositionRequest = {
    sid: string;
  };

  export type ListCompositionRequest = {
    status?: CompositionEnumStatus;
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    roomSid?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
