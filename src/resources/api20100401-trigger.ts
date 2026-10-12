import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Create a new UsageTrigger
   *
   * @remarks
   * Create a new UsageTrigger
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createUsageTrigger(
    request: Api20100401Trigger.CreateUsageTriggerRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountUsageUsageTrigger, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Usage/Triggers.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Webhooks that notify you of usage thresholds
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteUsageTrigger(
    request: Api20100401Trigger.DeleteUsageTriggerRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
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
   * Fetch and instance of a usage-trigger
   *
   * @remarks
   * Fetch and instance of a usage-trigger
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchUsageTrigger(
    request: Api20100401Trigger.FetchUsageTriggerRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountUsageUsageTrigger, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountUsageUsageTriggerSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of usage-triggers belonging to the account used to make the request
   *
   * @remarks
   * Retrieve a list of usage-triggers belonging to the account used to make the request
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listUsageTrigger(
    request: Api20100401Trigger.ListUsageTriggerRequest,
    options?: RequestOptions,
  ): ApiPromise<ListUsageTriggerResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Usage/Triggers.json"),
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
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listUsageTriggerResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an instance of a usage trigger
   *
   * @remarks
   * Update an instance of a usage trigger
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateUsageTrigger(
    request: Api20100401Trigger.UpdateUsageTriggerRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountUsageUsageTrigger, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Usage/Triggers/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401Trigger {
  export type CreateUsageTriggerRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the
     * resource.
     */
    accountSid: string;
    /** The URL we should call using `callback_method` when the trigger fires. */
    callbackUrl: string;
    /**
     * The usage value at which the trigger should fire. For convenience, you can use an offset
     * value such as `+30` to specify a trigger_value that is 30 units more than the current usage
     * value. Be sure to urlencode a `+` as `%2B`.
     */
    triggerValue: string;
    /**
     * The usage category that the trigger should watch. Use one of the supported [usage
     * categories](https://www.twilio.com/docs/usage/api/usage-record#usage-categories) for this
     * value.
     */
    usageCategory: string;
    /**
     * The HTTP method we should use to call `callback_url`. Can be: `GET` or `POST` and the default
     * is `POST`.
     */
    callbackMethod?: CallbackMethod1;
    /**
     * A descriptive string that you create to describe the resource. It can be up to 64 characters
     * long.
     */
    friendlyName?: string;
    /**
     * The frequency of a recurring UsageTrigger. Can be: `daily`, `monthly`, or `yearly` for
     * recurring triggers or empty for non-recurring triggers. A trigger will only fire once during
     * each period. Recurring times are in GMT.
     */
    recurring?: UsageTriggerEnumRecurring;
    /**
     * The field in the [UsageRecord](https://www.twilio.com/docs/usage/api/usage-record) resource
     * that fires the trigger. Can be: `count`, `usage`, or `price`, as described in the
     * [UsageRecords
     * documentation](https://www.twilio.com/docs/usage/api/usage-record#usage-count-price).
     */
    triggerBy?: UsageTriggerEnumTriggerField;
  };

  export type DeleteUsageTriggerRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * UsageTrigger resources to delete.
     */
    accountSid: string;
    /** The Twilio-provided string that uniquely identifies the UsageTrigger resource to delete. */
    sid: string;
  };

  export type FetchUsageTriggerRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * UsageTrigger resource to fetch.
     */
    accountSid: string;
    /** The Twilio-provided string that uniquely identifies the UsageTrigger resource to fetch. */
    sid: string;
  };

  export type ListUsageTriggerRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * UsageTrigger resources to read.
     */
    accountSid: string;
    /**
     * The frequency of recurring UsageTriggers to read. Can be: `daily`, `monthly`, or `yearly` to
     * read recurring UsageTriggers. An empty value or a value of `alltime` reads non-recurring
     * UsageTriggers.
     */
    recurring?: UsageTriggerEnumRecurring;
    /**
     * The trigger field of the UsageTriggers to read. Can be: `count`, `usage`, or `price` as
     * described in the [UsageRecords
     * documentation](https://www.twilio.com/docs/usage/api/usage-record#usage-count-price).
     */
    triggerBy?: UsageTriggerEnumTriggerField;
    /**
     * The usage category of the UsageTriggers to read. Must be a supported [usage
     * categories](https://www.twilio.com/docs/usage/api/usage-record#usage-categories).
     */
    usageCategory?: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateUsageTriggerRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * UsageTrigger resources to update.
     */
    accountSid: string;
    /** The Twilio-provided string that uniquely identifies the UsageTrigger resource to update. */
    sid: string;
    /**
     * The HTTP method we should use to call `callback_url`. Can be: `GET` or `POST` and the default
     * is `POST`.
     */
    callbackMethod?: CallbackMethod1;
    /** The URL we should call using `callback_method` when the trigger fires. */
    callbackUrl?: string;
    /**
     * A descriptive string that you create to describe the resource. It can be up to 64 characters
     * long.
     */
    friendlyName?: string;
  };
}
