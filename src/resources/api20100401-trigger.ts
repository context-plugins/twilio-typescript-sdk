import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  apiV2010AccountUsageUsageTriggerSchema,
  type ApiV2010AccountUsageUsageTrigger,
} from "../models/api-v2010-account-usage-usage-trigger.js";
import { callbackMethod1Schema, type CallbackMethod1 } from "../models/callback-method1.js";
import {
  listUsageTriggerResponseSchema,
  type ListUsageTriggerResponse,
} from "../models/list-usage-trigger-response.js";
import {
  usageTriggerEnumRecurringSchema,
  type UsageTriggerEnumRecurring,
} from "../models/usage-trigger-enum-recurring.js";
import {
  usageTriggerEnumTriggerFieldSchema,
  type UsageTriggerEnumTriggerField,
} from "../models/usage-trigger-enum-trigger-field.js";
import type { Servers } from "../servers.js";

export class Api20100401Trigger {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createUsageTrigger(
    request: Api20100401Trigger.CreateUsageTriggerRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountUsageUsageTrigger, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountUsageUsageTrigger, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Usage/Triggers.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "CallbackUrl", value: request.callbackUrl, schema: s.string() },
            { name: "TriggerValue", value: request.triggerValue, schema: s.string() },
            { name: "UsageCategory", value: request.usageCategory, schema: s.string() },
            {
              name: "CallbackMethod",
              value: request.callbackMethod,
              schema: s.optional(s.lazy(() => callbackMethod1Schema)),
            },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            {
              name: "Recurring",
              value: request.recurring,
              schema: s.optional(s.lazy(() => usageTriggerEnumRecurringSchema)),
            },
            {
              name: "TriggerBy",
              value: request.triggerBy,
              schema: s.optional(s.lazy(() => usageTriggerEnumTriggerFieldSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountUsageUsageTriggerSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteUsageTrigger(
    request: Api20100401Trigger.DeleteUsageTriggerRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json"),
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

  fetchUsageTrigger(
    request: Api20100401Trigger.FetchUsageTriggerRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountUsageUsageTrigger, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountUsageUsageTrigger, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountUsageUsageTriggerSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listUsageTrigger(
    request: Api20100401Trigger.ListUsageTriggerRequest,
    options?: RequestOptions,
  ): ApiPromise<ListUsageTriggerResponse, ResponseError> {
    return this.#rawClient.execute<ListUsageTriggerResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Usage/Triggers.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          {
            name: "Recurring",
            value: request.recurring,
            schema: s.optional(s.lazy(() => usageTriggerEnumRecurringSchema)),
          },
          {
            name: "TriggerBy",
            value: request.triggerBy,
            schema: s.optional(s.lazy(() => usageTriggerEnumTriggerFieldSchema)),
          },
          { name: "UsageCategory", value: request.usageCategory, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listUsageTriggerResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateUsageTrigger(
    request: Api20100401Trigger.UpdateUsageTriggerRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountUsageUsageTrigger, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountUsageUsageTrigger, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "CallbackMethod",
              value: request.callbackMethod,
              schema: s.optional(s.lazy(() => callbackMethod1Schema)),
            },
            { name: "CallbackUrl", value: request.callbackUrl, schema: s.optional(s.string()) },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountUsageUsageTriggerSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401Trigger {
  export type CreateUsageTriggerRequest = {
    accountSid: string;
    callbackUrl: string;
    triggerValue: string;
    usageCategory: string;
    callbackMethod?: CallbackMethod1;
    friendlyName?: string;
    recurring?: UsageTriggerEnumRecurring;
    triggerBy?: UsageTriggerEnumTriggerField;
  };

  export type DeleteUsageTriggerRequest = {
    accountSid: string;
    sid: string;
  };

  export type FetchUsageTriggerRequest = {
    accountSid: string;
    sid: string;
  };

  export type ListUsageTriggerRequest = {
    accountSid: string;
    recurring?: UsageTriggerEnumRecurring;
    triggerBy?: UsageTriggerEnumTriggerField;
    usageCategory?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateUsageTriggerRequest = {
    accountSid: string;
    sid: string;
    callbackMethod?: CallbackMethod1;
    callbackUrl?: string;
    friendlyName?: string;
  };
}
