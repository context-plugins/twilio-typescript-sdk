import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { listWebhookResponseSchema, type ListWebhookResponse } from "../models/list-webhook-response.js";
import {
  verifyV2ServiceWebhookSchema,
  type VerifyV2ServiceWebhook,
} from "../models/verify-v2-service-webhook.js";
import { webhookEnumStatusSchema, type WebhookEnumStatus } from "../models/webhook-enum-status.js";
import { webhookEnumVersionSchema, type WebhookEnumVersion } from "../models/webhook-enum-version.js";
import type { Servers } from "../servers.js";

export class VerifyV2Webhook {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new Webhook for the Service
   *
   * @remarks
   * Create a new Webhook for the Service
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createWebhook(
    request: VerifyV2Webhook.CreateWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceWebhook, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/Webhooks"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "EventTypes", value: request.eventTypes, schema: s.array(s.string()) },
            { name: "WebhookUrl", value: request.webhookUrl, schema: s.string() },
            {
              name: "Status",
              value: request.status,
              schema: s.optional(s.lazy(() => webhookEnumStatusSchema)),
            },
            {
              name: "Version",
              value: request.version,
              schema: s.optional(s.lazy(() => webhookEnumVersionSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceWebhookSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a specific Webhook.
   *
   * @remarks
   * Delete a specific Webhook.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteWebhook(
    request: VerifyV2Webhook.DeleteWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/Webhooks/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
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
   * Fetch a specific Webhook.
   *
   * @remarks
   * Fetch a specific Webhook.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchWebhook(
    request: VerifyV2Webhook.FetchWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceWebhook, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/Webhooks/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceWebhookSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Webhooks for a Service.
   *
   * @remarks
   * Retrieve a list of all Webhooks for a Service.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listWebhook(
    request: VerifyV2Webhook.ListWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<ListWebhookResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/Webhooks"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listWebhookResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  updateWebhook(
    request: VerifyV2Webhook.UpdateWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceWebhook, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/Webhooks/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "EventTypes", value: request.eventTypes, schema: s.optional(s.array(s.string())) },
            { name: "WebhookUrl", value: request.webhookUrl, schema: s.optional(s.string()) },
            {
              name: "Status",
              value: request.status,
              schema: s.optional(s.lazy(() => webhookEnumStatusSchema)),
            },
            {
              name: "Version",
              value: request.version,
              schema: s.optional(s.lazy(() => webhookEnumVersionSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceWebhookSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VerifyV2Webhook {
  export type CreateWebhookRequest = {
    /** The unique SID identifier of the Service. */
    serviceSid: string;
    /**
     * The string that you assigned to describe the webhook. **This value should not contain PII.**
     */
    friendlyName: string;
    /**
     * The array of events that this Webhook is subscribed to. Possible event types: `*,
     * factor.deleted, factor.created, factor.verified, challenge.approved, challenge.denied`
     */
    eventTypes: string[];
    /** The URL associated with this Webhook. */
    webhookUrl: string;
    /** The webhook status. Default value is `enabled`. One of: `enabled` or `disabled` */
    status?: WebhookEnumStatus;
    /**
     * The webhook version. Default value is `v2` which includes all the latest fields. Version `v1`
     * is legacy and may be removed in the future.
     */
    version?: WebhookEnumVersion;
  };

  export type DeleteWebhookRequest = {
    /** The unique SID identifier of the Service. */
    serviceSid: string;
    /** The Twilio-provided string that uniquely identifies the Webhook resource to delete. */
    sid: string;
  };

  export type FetchWebhookRequest = {
    /** The unique SID identifier of the Service. */
    serviceSid: string;
    /** The Twilio-provided string that uniquely identifies the Webhook resource to fetch. */
    sid: string;
  };

  export type ListWebhookRequest = {
    /** The unique SID identifier of the Service. */
    serviceSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateWebhookRequest = {
    /** The unique SID identifier of the Service. */
    serviceSid: string;
    /** The Twilio-provided string that uniquely identifies the Webhook resource to update. */
    sid: string;
    /**
     * The string that you assigned to describe the webhook. **This value should not contain PII.**
     */
    friendlyName?: string;
    /**
     * The array of events that this Webhook is subscribed to. Possible event types: `*,
     * factor.deleted, factor.created, factor.verified, challenge.approved, challenge.denied`
     */
    eventTypes?: string[];
    /** The URL associated with this Webhook. */
    webhookUrl?: string;
    /** The webhook status. Default value is `enabled`. One of: `enabled` or `disabled` */
    status?: WebhookEnumStatus;
    /**
     * The webhook version. Default value is `v2` which includes all the latest fields. Version `v1`
     * is legacy and may be removed in the future.
     */
    version?: WebhookEnumVersion;
  };
}
