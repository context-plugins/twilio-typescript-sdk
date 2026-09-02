import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  flexFlowEnumChannelTypeSchema,
  type FlexFlowEnumChannelType,
} from "../models/flex-flow-enum-channel-type.js";
import {
  flexFlowEnumIntegrationTypeSchema,
  type FlexFlowEnumIntegrationType,
} from "../models/flex-flow-enum-integration-type.js";
import { flexV1FlexFlowSchema, type FlexV1FlexFlow } from "../models/flex-v1-flex-flow.js";
import { listFlexFlowResponseSchema, type ListFlexFlowResponse } from "../models/list-flex-flow-response.js";
import type { Servers } from "../servers.js";

export class FlexV1FlexFlowApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createFlexFlow(
    request: FlexV1FlexFlowApi.CreateFlexFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1FlexFlow, ResponseError> {
    return this.#rawClient.execute<FlexV1FlexFlow, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/FlexFlows"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
            { name: "ChannelType", value: request.channelType, schema: flexFlowEnumChannelTypeSchema },
            { name: "ContactIdentity", value: request.contactIdentity, schema: s.optional(s.string()) },
            { name: "Enabled", value: request.enabled, schema: s.optional(s.boolean()) },
            {
              name: "IntegrationType",
              value: request.integrationType,
              schema: s.optional(s.lazy(() => flexFlowEnumIntegrationTypeSchema)),
            },
            {
              name: "Integration.FlowSid",
              value: request.integrationFlowSid,
              schema: s.optional(s.string()),
            },
            { name: "Integration.Url", value: request.integrationUrl, schema: s.optional(s.string()) },
            {
              name: "Integration.WorkspaceSid",
              value: request.integrationWorkspaceSid,
              schema: s.optional(s.string()),
            },
            {
              name: "Integration.WorkflowSid",
              value: request.integrationWorkflowSid,
              schema: s.optional(s.string()),
            },
            {
              name: "Integration.Channel",
              value: request.integrationChannel,
              schema: s.optional(s.string()),
            },
            {
              name: "Integration.Timeout",
              value: request.integrationTimeout,
              schema: s.optional(s.number()),
            },
            {
              name: "Integration.Priority",
              value: request.integrationPriority,
              schema: s.optional(s.number()),
            },
            {
              name: "Integration.CreationOnMessage",
              value: request.integrationCreationOnMessage,
              schema: s.optional(s.boolean()),
            },
            { name: "LongLived", value: request.longLived, schema: s.optional(s.boolean()) },
            { name: "JanitorEnabled", value: request.janitorEnabled, schema: s.optional(s.boolean()) },
            {
              name: "Integration.RetryCount",
              value: request.integrationRetryCount,
              schema: s.optional(s.number()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: flexV1FlexFlowSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteFlexFlow(
    request: FlexV1FlexFlowApi.DeleteFlexFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default13("/v1/FlexFlows/{Sid}"),
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

  fetchFlexFlow(
    request: FlexV1FlexFlowApi.FetchFlexFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1FlexFlow, ResponseError> {
    return this.#rawClient.execute<FlexV1FlexFlow, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/FlexFlows/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1FlexFlowSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listFlexFlow(
    request: FlexV1FlexFlowApi.ListFlexFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<ListFlexFlowResponse, ResponseError> {
    return this.#rawClient.execute<ListFlexFlowResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/FlexFlows"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listFlexFlowResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateFlexFlow(
    request: FlexV1FlexFlowApi.UpdateFlexFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1FlexFlow, ResponseError> {
    return this.#rawClient.execute<FlexV1FlexFlow, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/FlexFlows/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.optional(s.string()) },
            {
              name: "ChannelType",
              value: request.channelType,
              schema: s.optional(s.lazy(() => flexFlowEnumChannelTypeSchema)),
            },
            { name: "ContactIdentity", value: request.contactIdentity, schema: s.optional(s.string()) },
            { name: "Enabled", value: request.enabled, schema: s.optional(s.boolean()) },
            {
              name: "IntegrationType",
              value: request.integrationType,
              schema: s.optional(s.lazy(() => flexFlowEnumIntegrationTypeSchema)),
            },
            {
              name: "Integration.FlowSid",
              value: request.integrationFlowSid,
              schema: s.optional(s.string()),
            },
            { name: "Integration.Url", value: request.integrationUrl, schema: s.optional(s.string()) },
            {
              name: "Integration.WorkspaceSid",
              value: request.integrationWorkspaceSid,
              schema: s.optional(s.string()),
            },
            {
              name: "Integration.WorkflowSid",
              value: request.integrationWorkflowSid,
              schema: s.optional(s.string()),
            },
            {
              name: "Integration.Channel",
              value: request.integrationChannel,
              schema: s.optional(s.string()),
            },
            {
              name: "Integration.Timeout",
              value: request.integrationTimeout,
              schema: s.optional(s.number()),
            },
            {
              name: "Integration.Priority",
              value: request.integrationPriority,
              schema: s.optional(s.number()),
            },
            {
              name: "Integration.CreationOnMessage",
              value: request.integrationCreationOnMessage,
              schema: s.optional(s.boolean()),
            },
            { name: "LongLived", value: request.longLived, schema: s.optional(s.boolean()) },
            { name: "JanitorEnabled", value: request.janitorEnabled, schema: s.optional(s.boolean()) },
            {
              name: "Integration.RetryCount",
              value: request.integrationRetryCount,
              schema: s.optional(s.number()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: flexV1FlexFlowSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV1FlexFlowApi {
  export type CreateFlexFlowRequest = {
    friendlyName: string;
    chatServiceSid: string;
    channelType: FlexFlowEnumChannelType;
    contactIdentity?: string;
    enabled?: boolean;
    integrationType?: FlexFlowEnumIntegrationType;
    integrationFlowSid?: string;
    integrationUrl?: string;
    integrationWorkspaceSid?: string;
    integrationWorkflowSid?: string;
    integrationChannel?: string;
    integrationTimeout?: number;
    integrationPriority?: number;
    integrationCreationOnMessage?: boolean;
    longLived?: boolean;
    janitorEnabled?: boolean;
    integrationRetryCount?: number;
  };

  export type DeleteFlexFlowRequest = {
    sid: string;
  };

  export type FetchFlexFlowRequest = {
    sid: string;
  };

  export type ListFlexFlowRequest = {
    friendlyName?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateFlexFlowRequest = {
    sid: string;
    friendlyName?: string;
    chatServiceSid?: string;
    channelType?: FlexFlowEnumChannelType;
    contactIdentity?: string;
    enabled?: boolean;
    integrationType?: FlexFlowEnumIntegrationType;
    integrationFlowSid?: string;
    integrationUrl?: string;
    integrationWorkspaceSid?: string;
    integrationWorkflowSid?: string;
    integrationChannel?: string;
    integrationTimeout?: number;
    integrationPriority?: number;
    integrationCreationOnMessage?: boolean;
    longLived?: boolean;
    janitorEnabled?: boolean;
    integrationRetryCount?: number;
  };
}
