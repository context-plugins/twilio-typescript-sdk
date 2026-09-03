import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listDestinationAlphaSenderResponseSchema,
  type ListDestinationAlphaSenderResponse,
} from "../models/list-destination-alpha-sender-response.js";
import {
  messagingV1ServiceDestinationAlphaSenderSchema,
  type MessagingV1ServiceDestinationAlphaSender,
} from "../models/messaging-v1-service-destination-alpha-sender.js";
import type { Servers } from "../servers.js";

export class MessagingV1DestinationAlphaSender {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createDestinationAlphaSender(
    request: MessagingV1DestinationAlphaSender.CreateDestinationAlphaSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1ServiceDestinationAlphaSender, ResponseError> {
    return this.#rawClient.execute<MessagingV1ServiceDestinationAlphaSender, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default1("/v1/Services/{ServiceSid}/DestinationAlphaSenders"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "AlphaSender", value: request.alphaSender, schema: s.string() },
            { name: "IsoCountryCode", value: request.isoCountryCode, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: messagingV1ServiceDestinationAlphaSenderSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteDestinationAlphaSender(
    request: MessagingV1DestinationAlphaSender.DeleteDestinationAlphaSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default1("/v1/Services/{ServiceSid}/DestinationAlphaSenders/{Sid}"),
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

  fetchDestinationAlphaSender(
    request: MessagingV1DestinationAlphaSender.FetchDestinationAlphaSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1ServiceDestinationAlphaSender, ResponseError> {
    return this.#rawClient.execute<MessagingV1ServiceDestinationAlphaSender, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v1/Services/{ServiceSid}/DestinationAlphaSenders/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1ServiceDestinationAlphaSenderSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listDestinationAlphaSender(
    request: MessagingV1DestinationAlphaSender.ListDestinationAlphaSenderRequest,
    options?: RequestOptions,
  ): ApiPromise<ListDestinationAlphaSenderResponse, ResponseError> {
    return this.#rawClient.execute<ListDestinationAlphaSenderResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v1/Services/{ServiceSid}/DestinationAlphaSenders"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [
          { name: "IsoCountryCode", value: request.isoCountryCode, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listDestinationAlphaSenderResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace MessagingV1DestinationAlphaSender {
  export type CreateDestinationAlphaSenderRequest = {
    serviceSid: string;
    alphaSender: string;
    isoCountryCode?: string;
  };

  export type DeleteDestinationAlphaSenderRequest = {
    serviceSid: string;
    sid: string;
  };

  export type FetchDestinationAlphaSenderRequest = {
    serviceSid: string;
    sid: string;
  };

  export type ListDestinationAlphaSenderRequest = {
    serviceSid: string;
    isoCountryCode?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
