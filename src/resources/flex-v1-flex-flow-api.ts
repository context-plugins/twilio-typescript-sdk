import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Flex Flow
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createFlexFlow(
    request: FlexV1FlexFlowApi.CreateFlexFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1FlexFlow, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/v1/FlexFlows"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
            { name: "Integration.Timeout", value: request.integrationTimeout, schema: s.optional(s.int()) },
            { name: "Integration.Priority", value: request.integrationPriority, schema: s.optional(s.int()) },
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
              schema: s.optional(s.int()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: flexV1FlexFlowSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Flex Flow
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteFlexFlow(
    request: FlexV1FlexFlowApi.DeleteFlexFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default13("/v1/FlexFlows/{Sid}"),
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
   * Flex Flow
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchFlexFlow(
    request: FlexV1FlexFlowApi.FetchFlexFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1FlexFlow, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/v1/FlexFlows/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1FlexFlowSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Flex Flow
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listFlexFlow(
    request: FlexV1FlexFlowApi.ListFlexFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<ListFlexFlowResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/v1/FlexFlows"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listFlexFlowResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Flex Flow
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateFlexFlow(
    request: FlexV1FlexFlowApi.UpdateFlexFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1FlexFlow, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/v1/FlexFlows/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
            { name: "Integration.Timeout", value: request.integrationTimeout, schema: s.optional(s.int()) },
            { name: "Integration.Priority", value: request.integrationPriority, schema: s.optional(s.int()) },
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
              schema: s.optional(s.int()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: flexV1FlexFlowSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace FlexV1FlexFlowApi {
  export type CreateFlexFlowRequest = {
    /** A descriptive string that you create to describe the Flex Flow resource. */
    friendlyName: string;
    /** The SID of the chat service. */
    chatServiceSid: string;
    /**
     * The channel type. One of `web`, `facebook`, `sms`, `whatsapp`, `line` or `custom`. By
     * default, Studio’s Send to Flex widget passes it on to the Task attributes for Tasks created
     * based on this Flex Flow. The Task attributes will be used by the Flex UI to render the
     * respective Task as appropriate (applying channel-specific design and length limits). If
     * `channelType` is `facebook`, `whatsapp` or `line`, the Send to Flex widget should set the
     * Task Channel to Programmable Chat.
     */
    channelType: FlexFlowEnumChannelType;
    /** The channel contact's Identity. */
    contactIdentity?: string;
    /** Whether the new Flex Flow is enabled. */
    enabled?: boolean;
    /**
     * The software that will handle inbound messages. [Integration
     * Type](https://www.twilio.com/docs/flex/developer/messaging/manage-flows#integration-types)
     * can be: `studio`, `external`, or `task`.
     */
    integrationType?: FlexFlowEnumIntegrationType;
    /** The SID of the Studio Flow. Required when `integrationType` is `studio`. */
    integrationFlowSid?: string;
    /** The URL of the external webhook. Required when `integrationType` is `external`. */
    integrationUrl?: string;
    /** The Workspace SID for a new Task. Required when `integrationType` is `task`. */
    integrationWorkspaceSid?: string;
    /** The Workflow SID for a new Task. Required when `integrationType` is `task`. */
    integrationWorkflowSid?: string;
    /**
     * The Task Channel SID (TCXXXX) or unique name (e.g., `sms`) to use for the Task that will be
     * created. Applicable and required when `integrationType` is `task`. The default value is
     * `default`.
     */
    integrationChannel?: string;
    /**
     * The Task timeout in seconds for a new Task. Default is 86,400 seconds (24 hours). Optional
     * when `integrationType` is `task`, not applicable otherwise.
     */
    integrationTimeout?: number;
    /**
     * The Task priority of a new Task. The default priority is 0. Optional when `integrationType`
     * is `task`, not applicable otherwise.
     */
    integrationPriority?: number;
    /**
     * In the context of outbound messaging, defines whether to create a Task immediately (and
     * therefore reserve the conversation to current agent), or delay Task creation until the
     * customer sends the first response. Set to false to create immediately, true to delay Task
     * creation. This setting is only applicable for outbound messaging.
     */
    integrationCreationOnMessage?: boolean;
    /**
     * When enabled, Flex will keep the chat channel active so that it may be used for subsequent
     * interactions with a contact identity. Defaults to `false`.
     */
    longLived?: boolean;
    /**
     * When enabled, the Messaging Channel Janitor will remove active Proxy sessions if the
     * associated Task is deleted outside of the Flex UI. Defaults to `false`.
     */
    janitorEnabled?: boolean;
    /**
     * The number of times to retry the Studio Flow or webhook in case of failure. Takes integer
     * values from 0 to 3 with the default being 3. Optional when `integrationType` is `studio` or
     * `external`, not applicable otherwise.
     */
    integrationRetryCount?: number;
  };

  export type DeleteFlexFlowRequest = {
    /** The SID of the Flex Flow resource to delete. */
    sid: string;
  };

  export type FetchFlexFlowRequest = {
    /** The SID of the Flex Flow resource to fetch. */
    sid: string;
  };

  export type ListFlexFlowRequest = {
    /** The `friendly_name` of the Flex Flow resources to read. */
    friendlyName?: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateFlexFlowRequest = {
    /** The SID of the Flex Flow resource to update. */
    sid: string;
    /** A descriptive string that you create to describe the Flex Flow resource. */
    friendlyName?: string;
    /** The SID of the chat service. */
    chatServiceSid?: string;
    /**
     * The channel type. One of `web`, `facebook`, `sms`, `whatsapp`, `line` or `custom`. By
     * default, Studio’s Send to Flex widget passes it on to the Task attributes for Tasks created
     * based on this Flex Flow. The Task attributes will be used by the Flex UI to render the
     * respective Task as appropriate (applying channel-specific design and length limits). If
     * `channelType` is `facebook`, `whatsapp` or `line`, the Send to Flex widget should set the
     * Task Channel to Programmable Chat.
     */
    channelType?: FlexFlowEnumChannelType;
    /** The channel contact's Identity. */
    contactIdentity?: string;
    /** Whether the new Flex Flow is enabled. */
    enabled?: boolean;
    /**
     * The software that will handle inbound messages. [Integration
     * Type](https://www.twilio.com/docs/flex/developer/messaging/manage-flows#integration-types)
     * can be: `studio`, `external`, or `task`.
     */
    integrationType?: FlexFlowEnumIntegrationType;
    /** The SID of the Studio Flow. Required when `integrationType` is `studio`. */
    integrationFlowSid?: string;
    /** The URL of the external webhook. Required when `integrationType` is `external`. */
    integrationUrl?: string;
    /** The Workspace SID for a new Task. Required when `integrationType` is `task`. */
    integrationWorkspaceSid?: string;
    /** The Workflow SID for a new Task. Required when `integrationType` is `task`. */
    integrationWorkflowSid?: string;
    /**
     * The Task Channel SID (TCXXXX) or unique name (e.g., `sms`) to use for the Task that will be
     * created. Applicable and required when `integrationType` is `task`. The default value is
     * `default`.
     */
    integrationChannel?: string;
    /**
     * The Task timeout in seconds for a new Task. Default is 86,400 seconds (24 hours). Optional
     * when `integrationType` is `task`, not applicable otherwise.
     */
    integrationTimeout?: number;
    /**
     * The Task priority of a new Task. The default priority is 0. Optional when `integrationType`
     * is `task`, not applicable otherwise.
     */
    integrationPriority?: number;
    /**
     * In the context of outbound messaging, defines whether to create a Task immediately (and
     * therefore reserve the conversation to current agent), or delay Task creation until the
     * customer sends the first response. Set to false to create immediately, true to delay Task
     * creation. This setting is only applicable for outbound messaging.
     */
    integrationCreationOnMessage?: boolean;
    /**
     * When enabled, Flex will keep the chat channel active so that it may be used for subsequent
     * interactions with a contact identity. Defaults to `false`.
     */
    longLived?: boolean;
    /**
     * When enabled, the Messaging Channel Janitor will remove active Proxy sessions if the
     * associated Task is deleted outside of the Flex UI. Defaults to `false`.
     */
    janitorEnabled?: boolean;
    /**
     * The number of times to retry the Studio Flow or webhook in case of failure. Takes integer
     * values from 0 to 3 with the default being 3. Optional when `integrationType` is `studio` or
     * `external`, not applicable otherwise.
     */
    integrationRetryCount?: number;
  };
}
