import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  amdStatusCallbackMethodSchema,
  type AmdStatusCallbackMethod,
} from "../models/amd-status-callback-method.js";
import {
  dependentOrderEnumStatusSchema,
  type DependentOrderEnumStatus,
} from "../models/dependent-order-enum-status.js";
import {
  listHostedNumberOrderResponseSchema,
  type ListHostedNumberOrderResponse,
} from "../models/list-hosted-number-order-response.js";
import {
  numbersV2HostedNumberOrderSchema,
  type NumbersV2HostedNumberOrder,
} from "../models/numbers-v2-hosted-number-order.js";
import type { Servers } from "../servers.js";

export class NumbersV2HostedNumberOrderApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createHostedNumberOrder(
    request: NumbersV2HostedNumberOrderApi.CreateHostedNumberOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2HostedNumberOrder, ResponseError> {
    return this.#rawClient.execute<NumbersV2HostedNumberOrder, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default5("/v2/HostedNumber/Orders"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "PhoneNumber", value: request.phoneNumber, schema: s.string() },
            { name: "ContactPhoneNumber", value: request.contactPhoneNumber, schema: s.string() },
            { name: "AddressSid", value: request.addressSid, schema: s.string() },
            { name: "Email", value: request.email, schema: s.string() },
            { name: "AccountSid", value: request.accountSid, schema: s.optional(s.string()) },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "CcEmails", value: request.ccEmails, schema: s.optional(s.array(s.string())) },
            { name: "SmsUrl", value: request.smsUrl, schema: s.optional(s.string()) },
            {
              name: "SmsMethod",
              value: request.smsMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            { name: "SmsFallbackUrl", value: request.smsFallbackUrl, schema: s.optional(s.string()) },
            { name: "SmsCapability", value: request.smsCapability, schema: s.optional(s.boolean()) },
            {
              name: "SmsFallbackMethod",
              value: request.smsFallbackMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            { name: "StatusCallbackUrl", value: request.statusCallbackUrl, schema: s.optional(s.string()) },
            {
              name: "StatusCallbackMethod",
              value: request.statusCallbackMethod,
              schema: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
            },
            { name: "SmsApplicationSid", value: request.smsApplicationSid, schema: s.optional(s.string()) },
            { name: "ContactTitle", value: request.contactTitle, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: numbersV2HostedNumberOrderSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteHostedNumberOrder(
    request: NumbersV2HostedNumberOrderApi.DeleteHostedNumberOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default5("/v2/HostedNumber/Orders/{Sid}"),
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

  fetchHostedNumberOrder(
    request: NumbersV2HostedNumberOrderApi.FetchHostedNumberOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2HostedNumberOrder, ResponseError> {
    return this.#rawClient.execute<NumbersV2HostedNumberOrder, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v2/HostedNumber/Orders/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV2HostedNumberOrderSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listHostedNumberOrder(
    request: NumbersV2HostedNumberOrderApi.ListHostedNumberOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<ListHostedNumberOrderResponse, ResponseError> {
    return this.#rawClient.execute<ListHostedNumberOrderResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v2/HostedNumber/Orders"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          {
            name: "Status",
            value: request.status,
            schema: s.optional(s.lazy(() => dependentOrderEnumStatusSchema)),
          },
          { name: "SmsCapability", value: request.smsCapability, schema: s.optional(s.boolean()) },
          { name: "PhoneNumber", value: request.phoneNumber, schema: s.optional(s.string()) },
          {
            name: "IncomingPhoneNumberSid",
            value: request.incomingPhoneNumberSid,
            schema: s.optional(s.string()),
          },
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listHostedNumberOrderResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateHostedNumberOrder(
    request: NumbersV2HostedNumberOrderApi.UpdateHostedNumberOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2HostedNumberOrder, ResponseError> {
    return this.#rawClient.execute<NumbersV2HostedNumberOrder, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default5("/v2/HostedNumber/Orders/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Status", value: request.status, schema: dependentOrderEnumStatusSchema },
            {
              name: "VerificationCallDelay",
              value: request.verificationCallDelay,
              schema: s.optional(s.number()),
            },
            {
              name: "VerificationCallExtension",
              value: request.verificationCallExtension,
              schema: s.optional(s.string()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: numbersV2HostedNumberOrderSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace NumbersV2HostedNumberOrderApi {
  export type CreateHostedNumberOrderRequest = {
    phoneNumber: string;
    contactPhoneNumber: string;
    addressSid: string;
    email: string;
    accountSid?: string;
    friendlyName?: string;
    ccEmails?: string[];
    smsUrl?: string;
    smsMethod?: AmdStatusCallbackMethod;
    smsFallbackUrl?: string;
    smsCapability?: boolean;
    smsFallbackMethod?: AmdStatusCallbackMethod;
    statusCallbackUrl?: string;
    statusCallbackMethod?: AmdStatusCallbackMethod;
    smsApplicationSid?: string;
    contactTitle?: string;
  };

  export type DeleteHostedNumberOrderRequest = {
    sid: string;
  };

  export type FetchHostedNumberOrderRequest = {
    sid: string;
  };

  export type ListHostedNumberOrderRequest = {
    status?: DependentOrderEnumStatus;
    smsCapability?: boolean;
    phoneNumber?: string;
    incomingPhoneNumberSid?: string;
    friendlyName?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateHostedNumberOrderRequest = {
    sid: string;
    status: DependentOrderEnumStatus;
    verificationCallDelay?: number;
    verificationCallExtension?: string;
  };
}
