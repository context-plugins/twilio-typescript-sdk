import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createBulkHostedNumberOrder(
    request: NumbersV2BulkHostedNumberOrderApi.CreateBulkHostedNumberOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2BulkHostedNumberOrder, ResponseError> {
    return this.#rawClient.execute<NumbersV2BulkHostedNumberOrder, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default5("/v2/HostedNumber/Orders/Bulk"),
        auth: this.#auth.accountSidAuthToken,
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: numbersV2BulkHostedNumberOrderSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchBulkHostedNumberOrder(
    request: NumbersV2BulkHostedNumberOrderApi.FetchBulkHostedNumberOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2BulkHostedNumberOrder, ResponseError> {
    return this.#rawClient.execute<NumbersV2BulkHostedNumberOrder, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v2/HostedNumber/Orders/Bulk/{BulkHostingSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "BulkHostingSid", value: request.bulkHostingSid, schema: s.string() }],
        query: [{ name: "OrderStatus", value: request.orderStatus, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV2BulkHostedNumberOrderSchema },
        errorFactory: ResponseError,
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
    bulkHostingSid: string;
    orderStatus?: string;
  };
}
