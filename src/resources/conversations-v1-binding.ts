import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  conversationsV1ServiceServiceBindingSchema,
  type ConversationsV1ServiceServiceBinding,
} from "../models/conversations-v1-service-service-binding.js";
import {
  listServiceBindingResponseSchema,
  type ListServiceBindingResponse,
} from "../models/list-service-binding-response.js";
import {
  serviceBindingEnumBindingTypeSchema,
  type ServiceBindingEnumBindingType,
} from "../models/service-binding-enum-binding-type.js";
import type { Servers } from "../servers.js";

export class ConversationsV1Binding {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Remove a push notification binding from the conversation service
   *
   * @remarks
   * Remove a push notification binding from the conversation service
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteServiceBinding(
    request: ConversationsV1Binding.DeleteServiceBindingRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default7("/v1/Services/{ChatServiceSid}/Bindings/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
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
   * Fetch a push notification binding from the conversation service
   *
   * @remarks
   * Fetch a push notification binding from the conversation service
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchServiceBinding(
    request: ConversationsV1Binding.FetchServiceBindingRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceBinding, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Services/{ChatServiceSid}/Bindings/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1ServiceServiceBindingSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all push notification bindings in the conversation service
   *
   * @remarks
   * Retrieve a list of all push notification bindings in the conversation service
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listServiceBinding(
    request: ConversationsV1Binding.ListServiceBindingRequest,
    options?: RequestOptions,
  ): ApiPromise<ListServiceBindingResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Services/{ChatServiceSid}/Bindings"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() }],
        query: [
          {
            name: "BindingType",
            value: request.bindingType,
            schema: s.optional(s.array(s.lazy(() => serviceBindingEnumBindingTypeSchema))),
          },
          { name: "Identity", value: request.identity, schema: s.optional(s.array(s.string())) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listServiceBindingResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ConversationsV1Binding {
  export type DeleteServiceBindingRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) to delete the
     * Binding resource from.
     */
    chatServiceSid: string;
    /** The SID of the Binding resource to delete. */
    sid: string;
  };

  export type FetchServiceBindingRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Binding resource
     * is associated with.
     */
    chatServiceSid: string;
    /** A 34 character string that uniquely identifies this resource. */
    sid: string;
  };

  export type ListServiceBindingRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Binding resource
     * is associated with.
     */
    chatServiceSid: string;
    /**
     * The push technology used by the Binding resources to read. Can be: `apn`, `gcm`, `fcm`, or
     * `twilsock`. See [push notification
     * configuration](https://www.twilio.com/docs/chat/push-notification-configuration) for more
     * info.
     */
    bindingType?: ServiceBindingEnumBindingType[];
    /**
     * The identity of a [Conversation
     * User](https://www.twilio.com/docs/conversations/api/user-resource) this binding belongs to.
     * See [access tokens](https://www.twilio.com/docs/conversations/create-tokens) for more
     * details.
     */
    identity?: string[];
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 100.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };
}
