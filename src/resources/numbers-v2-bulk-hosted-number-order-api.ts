import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  numbersV2BulkHostedNumberOrderSchema,
  type NumbersV2BulkHostedNumberOrder,
} from "../models/numbers-v2-bulk-hosted-number-order.js";
import type { Servers } from "../servers.js";

export class NumbersV2BulkHostedNumberOrderApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Host multiple phone numbers on Twilio's platform.
   *
   * @remarks
   * Host multiple phone numbers on Twilio's platform.
   *
   * @returns Accepted
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBulkHostedNumberOrder(
    request: NumbersV2BulkHostedNumberOrderApi.CreateBulkHostedNumberOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2BulkHostedNumberOrder, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default5("/v2/HostedNumber/Orders/Bulk"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: numbersV2BulkHostedNumberOrderSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch a specific BulkHostedNumberOrder.
   *
   * @remarks
   * Fetch a specific BulkHostedNumberOrder.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchBulkHostedNumberOrder(
    request: NumbersV2BulkHostedNumberOrderApi.FetchBulkHostedNumberOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2BulkHostedNumberOrder, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5("/v2/HostedNumber/Orders/Bulk/{BulkHostingSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "BulkHostingSid", value: request.bulkHostingSid, schema: s.string() }],
        query: [{ name: "OrderStatus", value: request.orderStatus, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV2BulkHostedNumberOrderSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace NumbersV2BulkHostedNumberOrderApi {
  export type CreateBulkHostedNumberOrderRequest = {
    body?: Record<string, unknown>;
  };

  export type FetchBulkHostedNumberOrderRequest = {
    /** A 34 character string that uniquely identifies this BulkHostedNumberOrder. */
    bulkHostingSid: string;
    /**
     * Order status can be used for filtering on Hosted Number Order status values. To see a
     * complete list of order statuses, please check
     * 'https://www.twilio.com/docs/phone-numbers/hosted-numbers/hosted-numbers-api/hosted-number-order-resource#status-values'.
     */
    orderStatus?: string;
  };
}
