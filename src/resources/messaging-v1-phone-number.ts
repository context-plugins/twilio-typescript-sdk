import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listPhoneNumberResponseSchema,
  type ListPhoneNumberResponse,
} from "../models/list-phone-number-response.js";
import {
  messagingV1ServicePhoneNumberSchema,
  type MessagingV1ServicePhoneNumber,
} from "../models/messaging-v1-service-phone-number.js";
import type { Servers } from "../servers.js";

export class MessagingV1PhoneNumber {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createPhoneNumber(
    request: MessagingV1PhoneNumber.CreatePhoneNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1ServicePhoneNumber, ResponseError> {
    return this.#rawClient.execute<MessagingV1ServicePhoneNumber, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default1("/v1/Services/{ServiceSid}/PhoneNumbers"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "PhoneNumberSid", value: request.phoneNumberSid, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: messagingV1ServicePhoneNumberSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deletePhoneNumber(
    request: MessagingV1PhoneNumber.DeletePhoneNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default1("/v1/Services/{ServiceSid}/PhoneNumbers/{Sid}"),
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

  fetchPhoneNumber(
    request: MessagingV1PhoneNumber.FetchPhoneNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1ServicePhoneNumber, ResponseError> {
    return this.#rawClient.execute<MessagingV1ServicePhoneNumber, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v1/Services/{ServiceSid}/PhoneNumbers/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1ServicePhoneNumberSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listPhoneNumber(
    request: MessagingV1PhoneNumber.ListPhoneNumberRequest,
    options?: RequestOptions,
  ): ApiPromise<ListPhoneNumberResponse, ResponseError> {
    return this.#rawClient.execute<ListPhoneNumberResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v1/Services/{ServiceSid}/PhoneNumbers"),
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
        success: { kind: "json", schema: listPhoneNumberResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace MessagingV1PhoneNumber {
  export type CreatePhoneNumberRequest = {
    serviceSid: string;
    phoneNumberSid: string;
  };

  export type DeletePhoneNumberRequest = {
    serviceSid: string;
    sid: string;
  };

  export type FetchPhoneNumberRequest = {
    serviceSid: string;
    sid: string;
  };

  export type ListPhoneNumberRequest = {
    serviceSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
