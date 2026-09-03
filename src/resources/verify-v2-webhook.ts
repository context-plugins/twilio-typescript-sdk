import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createWebhook(
    request: VerifyV2Webhook.CreateWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceWebhook, ResponseError> {
    return this.#rawClient.execute<VerifyV2ServiceWebhook, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/Webhooks"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteWebhook(
    request: VerifyV2Webhook.DeleteWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/Webhooks/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchWebhook(
    request: VerifyV2Webhook.FetchWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceWebhook, ResponseError> {
    return this.#rawClient.execute<VerifyV2ServiceWebhook, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/Webhooks/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceWebhookSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listWebhook(
    request: VerifyV2Webhook.ListWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<ListWebhookResponse, ResponseError> {
    return this.#rawClient.execute<ListWebhookResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/Webhooks"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listWebhookResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateWebhook(
    request: VerifyV2Webhook.UpdateWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceWebhook, ResponseError> {
    return this.#rawClient.execute<VerifyV2ServiceWebhook, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/Webhooks/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VerifyV2Webhook {
  export type CreateWebhookRequest = {
    serviceSid: string;
    friendlyName: string;
    eventTypes: string[];
    webhookUrl: string;
    status?: WebhookEnumStatus;
    version?: WebhookEnumVersion;
  };

  export type DeleteWebhookRequest = {
    serviceSid: string;
    sid: string;
  };

  export type FetchWebhookRequest = {
    serviceSid: string;
    sid: string;
  };

  export type ListWebhookRequest = {
    serviceSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateWebhookRequest = {
    serviceSid: string;
    sid: string;
    friendlyName?: string;
    eventTypes?: string[];
    webhookUrl?: string;
    status?: WebhookEnumStatus;
    version?: WebhookEnumVersion;
  };
}
