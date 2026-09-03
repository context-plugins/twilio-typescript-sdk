import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listPhoneNumberResponse1Schema,
  type ListPhoneNumberResponse1,
} from "../models/list-phone-number-response1.js";
import {
  proxyV1ServicePhoneNumberSchema,
  type ProxyV1ServicePhoneNumber,
} from "../models/proxy-v1-service-phone-number.js";
import type { Servers } from "../servers.js";

export class ProxyV1PhoneNumber {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createPhoneNumber2(
    request: ProxyV1PhoneNumber.CreatePhoneNumber2Request,
    options?: RequestOptions,
  ): ApiPromise<ProxyV1ServicePhoneNumber, ResponseError> {
    return this.#rawClient.execute<ProxyV1ServicePhoneNumber, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default10("/v1/Services/{ServiceSid}/PhoneNumbers"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Sid", value: request.sid, schema: s.optional(s.string()) },
            { name: "PhoneNumber", value: request.phoneNumber, schema: s.optional(s.string()) },
            { name: "IsReserved", value: request.isReserved, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: proxyV1ServicePhoneNumberSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deletePhoneNumber2(
    request: ProxyV1PhoneNumber.DeletePhoneNumber2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default10("/v1/Services/{ServiceSid}/PhoneNumbers/{Sid}"),
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

  fetchPhoneNumber4(
    request: ProxyV1PhoneNumber.FetchPhoneNumber4Request,
    options?: RequestOptions,
  ): ApiPromise<ProxyV1ServicePhoneNumber, ResponseError> {
    return this.#rawClient.execute<ProxyV1ServicePhoneNumber, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default10("/v1/Services/{ServiceSid}/PhoneNumbers/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: proxyV1ServicePhoneNumberSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listPhoneNumber2(
    request: ProxyV1PhoneNumber.ListPhoneNumber2Request,
    options?: RequestOptions,
  ): ApiPromise<ListPhoneNumberResponse1, ResponseError> {
    return this.#rawClient.execute<ListPhoneNumberResponse1, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default10("/v1/Services/{ServiceSid}/PhoneNumbers"),
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
        success: { kind: "json", schema: listPhoneNumberResponse1Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updatePhoneNumber(
    request: ProxyV1PhoneNumber.UpdatePhoneNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<ProxyV1ServicePhoneNumber, ResponseError> {
    return this.#rawClient.execute<ProxyV1ServicePhoneNumber, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default10("/v1/Services/{ServiceSid}/PhoneNumbers/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "IsReserved", value: request.isReserved, schema: s.optional(s.boolean()) }],
        },
      },
      {
        success: { kind: "json", schema: proxyV1ServicePhoneNumberSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace ProxyV1PhoneNumber {
  export type CreatePhoneNumber2Request = {
    serviceSid: string;
    sid?: string;
    phoneNumber?: string;
    isReserved?: boolean;
  };

  export type DeletePhoneNumber2Request = {
    serviceSid: string;
    sid: string;
  };

  export type FetchPhoneNumber4Request = {
    serviceSid: string;
    sid: string;
  };

  export type ListPhoneNumber2Request = {
    serviceSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdatePhoneNumberRequest = {
    serviceSid: string;
    sid: string;
    isReserved?: boolean;
  };
}
