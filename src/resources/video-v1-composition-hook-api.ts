import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  amdStatusCallbackMethodSchema,
  type AmdStatusCallbackMethod,
} from "../models/amd-status-callback-method.js";
import {
  compositionHookEnumFormatSchema,
  type CompositionHookEnumFormat,
} from "../models/composition-hook-enum-format.js";
import {
  listCompositionHookResponseSchema,
  type ListCompositionHookResponse,
} from "../models/list-composition-hook-response.js";
import {
  videoV1CompositionHookSchema,
  type VideoV1CompositionHook,
} from "../models/video-v1-composition-hook.js";
import type { Servers } from "../servers.js";

export class VideoV1CompositionHookApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createCompositionHook(
    request: VideoV1CompositionHookApi.CreateCompositionHookRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1CompositionHook, ResponseError> {
    return this.#rawClient.execute<VideoV1CompositionHook, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default6("/v1/CompositionHooks"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "Enabled", value: request.enabled, schema: s.optional(s.boolean()) },
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
              schema: s.optional(s.lazy(() => compositionHookEnumFormatSchema)),
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
        success: { kind: "json", schema: videoV1CompositionHookSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteCompositionHook(
    request: VideoV1CompositionHookApi.DeleteCompositionHookRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default6("/v1/CompositionHooks/{Sid}"),
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

  fetchCompositionHook(
    request: VideoV1CompositionHookApi.FetchCompositionHookRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1CompositionHook, ResponseError> {
    return this.#rawClient.execute<VideoV1CompositionHook, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default6("/v1/CompositionHooks/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: videoV1CompositionHookSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listCompositionHook(
    request: VideoV1CompositionHookApi.ListCompositionHookRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCompositionHookResponse, ResponseError> {
    return this.#rawClient.execute<ListCompositionHookResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default6("/v1/CompositionHooks"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "Enabled", value: request.enabled, schema: s.optional(s.boolean()) },
          { name: "DateCreatedAfter", value: request.dateCreatedAfter, schema: s.optional(s.dateTime()) },
          { name: "DateCreatedBefore", value: request.dateCreatedBefore, schema: s.optional(s.dateTime()) },
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCompositionHookResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateCompositionHook(
    request: VideoV1CompositionHookApi.UpdateCompositionHookRequest,
    options?: RequestOptions,
  ): ApiPromise<VideoV1CompositionHook, ResponseError> {
    return this.#rawClient.execute<VideoV1CompositionHook, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default6("/v1/CompositionHooks/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "Enabled", value: request.enabled, schema: s.optional(s.boolean()) },
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
            { name: "Trim", value: request.trim, schema: s.optional(s.boolean()) },
            {
              name: "Format",
              value: request.format,
              schema: s.optional(s.lazy(() => compositionHookEnumFormatSchema)),
            },
            { name: "Resolution", value: request.resolution, schema: s.optional(s.string()) },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            {
              name: "StatusCallbackMethod",
              value: request.statusCallbackMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: videoV1CompositionHookSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VideoV1CompositionHookApi {
  export type CreateCompositionHookRequest = {
    friendlyName: string;
    enabled?: boolean;
    videoLayout?: Record<string, unknown>;
    audioSources?: string[];
    audioSourcesExcluded?: string[];
    resolution?: string;
    format?: CompositionHookEnumFormat;
    statusCallback?: string;
    statusCallbackMethod?: AmdStatusCallbackMethod;
    trim?: boolean;
  };

  export type DeleteCompositionHookRequest = {
    sid: string;
  };

  export type FetchCompositionHookRequest = {
    sid: string;
  };

  export type ListCompositionHookRequest = {
    enabled?: boolean;
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    friendlyName?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateCompositionHookRequest = {
    sid: string;
    friendlyName: string;
    enabled?: boolean;
    videoLayout?: Record<string, unknown>;
    audioSources?: string[];
    audioSourcesExcluded?: string[];
    trim?: boolean;
    format?: CompositionHookEnumFormat;
    resolution?: string;
    statusCallback?: string;
    statusCallbackMethod?: AmdStatusCallbackMethod;
  };
}
