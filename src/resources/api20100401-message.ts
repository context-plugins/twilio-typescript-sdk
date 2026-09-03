import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountMessageSchema,
  type ApiV2010AccountMessage,
} from "../models/api-v2010-account-message.js";
import { listMessageResponseSchema, type ListMessageResponse } from "../models/list-message-response.js";
import {
  messageEnumAddressRetentionSchema,
  type MessageEnumAddressRetention,
} from "../models/message-enum-address-retention.js";
import {
  messageEnumContentRetentionSchema,
  type MessageEnumContentRetention,
} from "../models/message-enum-content-retention.js";
import { messageEnumRiskCheckSchema, type MessageEnumRiskCheck } from "../models/message-enum-risk-check.js";
import {
  messageEnumScheduleTypeSchema,
  type MessageEnumScheduleType,
} from "../models/message-enum-schedule-type.js";
import {
  messageEnumTrafficTypeSchema,
  type MessageEnumTrafficType,
} from "../models/message-enum-traffic-type.js";
import {
  messageEnumUpdateStatusSchema,
  type MessageEnumUpdateStatus,
} from "../models/message-enum-update-status.js";
import type { Servers } from "../servers.js";

export class Api20100401Message {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createMessage(
    request: Api20100401Message.CreateMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountMessage, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountMessage, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Messages.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "To", value: request.to, schema: s.string() },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            { name: "ApplicationSid", value: request.applicationSid, schema: s.optional(s.string()) },
            { name: "MaxPrice", value: request.maxPrice, schema: s.optional(s.number()) },
            { name: "ProvideFeedback", value: request.provideFeedback, schema: s.optional(s.boolean()) },
            { name: "Attempt", value: request.attempt, schema: s.optional(s.number()) },
            { name: "ValidityPeriod", value: request.validityPeriod, schema: s.optional(s.number()) },
            { name: "ForceDelivery", value: request.forceDelivery, schema: s.optional(s.boolean()) },
            {
              name: "ContentRetention",
              value: request.contentRetention,
              schema: s.optional(s.lazy(() => messageEnumContentRetentionSchema)),
            },
            {
              name: "AddressRetention",
              value: request.addressRetention,
              schema: s.optional(s.lazy(() => messageEnumAddressRetentionSchema)),
            },
            { name: "SmartEncoded", value: request.smartEncoded, schema: s.optional(s.boolean()) },
            {
              name: "PersistentAction",
              value: request.persistentAction,
              schema: s.optional(s.array(s.string())),
            },
            {
              name: "TrafficType",
              value: request.trafficType,
              schema: s.optional(s.lazy(() => messageEnumTrafficTypeSchema)),
            },
            { name: "ShortenUrls", value: request.shortenUrls, schema: s.optional(s.boolean()) },
            {
              name: "ScheduleType",
              value: request.scheduleType,
              schema: s.optional(s.lazy(() => messageEnumScheduleTypeSchema)),
            },
            { name: "SendAt", value: request.sendAt, schema: s.optional(s.dateTime()) },
            { name: "SendAsMms", value: request.sendAsMms, schema: s.optional(s.boolean()) },
            { name: "ContentVariables", value: request.contentVariables, schema: s.optional(s.string()) },
            {
              name: "RiskCheck",
              value: request.riskCheck,
              schema: s.optional(s.lazy(() => messageEnumRiskCheckSchema)),
            },
            { name: "From", value: request.from, schema: s.optional(s.string()) },
            { name: "FallbackFrom", value: request.fallbackFrom, schema: s.optional(s.string()) },
            {
              name: "MessagingServiceSid",
              value: request.messagingServiceSid,
              schema: s.optional(s.string()),
            },
            { name: "Body", value: request.body2, schema: s.optional(s.string()) },
            { name: "MediaUrl", value: request.mediaUrl, schema: s.optional(s.array(s.string())) },
            { name: "ContentSid", value: request.contentSid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountMessageSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteMessage(
    request: Api20100401Message.DeleteMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
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

  fetchMessage(
    request: Api20100401Message.FetchMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountMessage, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountMessage, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountMessageSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listMessage(
    request: Api20100401Message.ListMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ListMessageResponse, ResponseError> {
    return this.#rawClient.execute<ListMessageResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Messages.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "To", value: request.to, schema: s.optional(s.string()) },
          { name: "From", value: request.from, schema: s.optional(s.string()) },
          { name: "DateSent", value: request.dateSent, schema: s.optional(s.dateTime()) },
          { name: "DateSent<", value: request.dateSentQuery, schema: s.optional(s.dateTime()) },
          { name: "DateSent>", value: request.dateSentQueryQuery, schema: s.optional(s.dateTime()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listMessageResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateMessage(
    request: Api20100401Message.UpdateMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountMessage, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountMessage, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Messages/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Body", value: request.body2, schema: s.optional(s.string()) },
            {
              name: "Status",
              value: request.status,
              schema: s.optional(s.lazy(() => messageEnumUpdateStatusSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountMessageSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401Message {
  export type CreateMessageRequest = {
    accountSid: string;
    to: string;
    statusCallback?: string;
    applicationSid?: string;
    maxPrice?: number;
    provideFeedback?: boolean;
    attempt?: number;
    validityPeriod?: number;
    forceDelivery?: boolean;
    contentRetention?: MessageEnumContentRetention;
    addressRetention?: MessageEnumAddressRetention;
    smartEncoded?: boolean;
    persistentAction?: string[];
    trafficType?: MessageEnumTrafficType;
    shortenUrls?: boolean;
    scheduleType?: MessageEnumScheduleType;
    sendAt?: Date;
    sendAsMms?: boolean;
    contentVariables?: string;
    riskCheck?: MessageEnumRiskCheck;
    from?: string;
    fallbackFrom?: string;
    messagingServiceSid?: string;
    body2?: string;
    mediaUrl?: string[];
    contentSid?: string;
  };

  export type DeleteMessageRequest = {
    accountSid: string;
    sid: string;
  };

  export type FetchMessageRequest = {
    accountSid: string;
    sid: string;
  };

  export type ListMessageRequest = {
    accountSid: string;
    to?: string;
    from?: string;
    dateSent?: Date;
    dateSentQuery?: Date;
    dateSentQueryQuery?: Date;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateMessageRequest = {
    accountSid: string;
    sid: string;
    body2?: string;
    status?: MessageEnumUpdateStatus;
  };
}
