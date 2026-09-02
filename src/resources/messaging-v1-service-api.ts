import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  amdStatusCallbackMethodSchema,
  type AmdStatusCallbackMethod,
} from "../models/amd-status-callback-method.js";
import { listServiceResponseSchema, type ListServiceResponse } from "../models/list-service-response.js";
import { messagingV1ServiceSchema, type MessagingV1Service } from "../models/messaging-v1-service.js";
import {
  serviceEnumScanMessageContentSchema,
  type ServiceEnumScanMessageContent,
} from "../models/service-enum-scan-message-content.js";
import type { Servers } from "../servers.js";

export class MessagingV1ServiceApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createService(
    request: MessagingV1ServiceApi.CreateServiceRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1Service, ResponseError> {
    return this.#rawClient.execute<MessagingV1Service, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default1("/v1/Services"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "InboundRequestUrl", value: request.inboundRequestUrl, schema: s.optional(s.string()) },
            {
              name: "InboundMethod",
              value: request.inboundMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            { name: "FallbackUrl", value: request.fallbackUrl, schema: s.optional(s.string()) },
            {
              name: "FallbackMethod",
              value: request.fallbackMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            { name: "StickySender", value: request.stickySender, schema: s.optional(s.boolean()) },
            { name: "MmsConverter", value: request.mmsConverter, schema: s.optional(s.boolean()) },
            { name: "SmartEncoding", value: request.smartEncoding, schema: s.optional(s.boolean()) },
            {
              name: "ScanMessageContent",
              value: request.scanMessageContent,
              schema: s.optional(s.lazy(() => serviceEnumScanMessageContentSchema)),
            },
            {
              name: "FallbackToLongCode",
              value: request.fallbackToLongCode,
              schema: s.optional(s.boolean()),
            },
            { name: "AreaCodeGeomatch", value: request.areaCodeGeomatch, schema: s.optional(s.boolean()) },
            { name: "ValidityPeriod", value: request.validityPeriod, schema: s.optional(s.number()) },
            {
              name: "SynchronousValidation",
              value: request.synchronousValidation,
              schema: s.optional(s.boolean()),
            },
            { name: "Usecase", value: request.usecase, schema: s.optional(s.string()) },
            {
              name: "UseInboundWebhookOnNumber",
              value: request.useInboundWebhookOnNumber,
              schema: s.optional(s.boolean()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: messagingV1ServiceSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteService(
    request: MessagingV1ServiceApi.DeleteServiceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default1("/v1/Services/{Sid}"),
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

  fetchService(
    request: MessagingV1ServiceApi.FetchServiceRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1Service, ResponseError> {
    return this.#rawClient.execute<MessagingV1Service, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v1/Services/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1ServiceSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listService(
    request: MessagingV1ServiceApi.ListServiceRequest,
    options?: RequestOptions,
  ): ApiPromise<ListServiceResponse, ResponseError> {
    return this.#rawClient.execute<ListServiceResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v1/Services"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listServiceResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateService(
    request: MessagingV1ServiceApi.UpdateServiceRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1Service, ResponseError> {
    return this.#rawClient.execute<MessagingV1Service, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default1("/v1/Services/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "InboundRequestUrl", value: request.inboundRequestUrl, schema: s.optional(s.string()) },
            {
              name: "InboundMethod",
              value: request.inboundMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            { name: "FallbackUrl", value: request.fallbackUrl, schema: s.optional(s.string()) },
            {
              name: "FallbackMethod",
              value: request.fallbackMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            { name: "StickySender", value: request.stickySender, schema: s.optional(s.boolean()) },
            { name: "MmsConverter", value: request.mmsConverter, schema: s.optional(s.boolean()) },
            { name: "SmartEncoding", value: request.smartEncoding, schema: s.optional(s.boolean()) },
            {
              name: "ScanMessageContent",
              value: request.scanMessageContent,
              schema: s.optional(s.lazy(() => serviceEnumScanMessageContentSchema)),
            },
            {
              name: "FallbackToLongCode",
              value: request.fallbackToLongCode,
              schema: s.optional(s.boolean()),
            },
            { name: "AreaCodeGeomatch", value: request.areaCodeGeomatch, schema: s.optional(s.boolean()) },
            { name: "ValidityPeriod", value: request.validityPeriod, schema: s.optional(s.number()) },
            {
              name: "SynchronousValidation",
              value: request.synchronousValidation,
              schema: s.optional(s.boolean()),
            },
            { name: "Usecase", value: request.usecase, schema: s.optional(s.string()) },
            {
              name: "UseInboundWebhookOnNumber",
              value: request.useInboundWebhookOnNumber,
              schema: s.optional(s.boolean()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: messagingV1ServiceSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace MessagingV1ServiceApi {
  export type CreateServiceRequest = {
    friendlyName: string;
    inboundRequestUrl?: string;
    inboundMethod?: AmdStatusCallbackMethod;
    fallbackUrl?: string;
    fallbackMethod?: AmdStatusCallbackMethod;
    statusCallback?: string;
    stickySender?: boolean;
    mmsConverter?: boolean;
    smartEncoding?: boolean;
    scanMessageContent?: ServiceEnumScanMessageContent;
    fallbackToLongCode?: boolean;
    areaCodeGeomatch?: boolean;
    validityPeriod?: number;
    synchronousValidation?: boolean;
    usecase?: string;
    useInboundWebhookOnNumber?: boolean;
  };

  export type DeleteServiceRequest = {
    sid: string;
  };

  export type FetchServiceRequest = {
    sid: string;
  };

  export type ListServiceRequest = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateServiceRequest = {
    sid: string;
    friendlyName?: string;
    inboundRequestUrl?: string;
    inboundMethod?: AmdStatusCallbackMethod;
    fallbackUrl?: string;
    fallbackMethod?: AmdStatusCallbackMethod;
    statusCallback?: string;
    stickySender?: boolean;
    mmsConverter?: boolean;
    smartEncoding?: boolean;
    scanMessageContent?: ServiceEnumScanMessageContent;
    fallbackToLongCode?: boolean;
    areaCodeGeomatch?: boolean;
    validityPeriod?: number;
    synchronousValidation?: boolean;
    usecase?: string;
    useInboundWebhookOnNumber?: boolean;
  };
}
