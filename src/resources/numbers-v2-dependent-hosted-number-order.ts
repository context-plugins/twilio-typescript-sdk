import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  dependentHostedNumberOrderEnumStatusSchema,
  type DependentHostedNumberOrderEnumStatus,
} from "../models/dependent-hosted-number-order-enum-status.js";
import {
  listDependentHostedNumberOrderResponseSchema,
  type ListDependentHostedNumberOrderResponse,
} from "../models/list-dependent-hosted-number-order-response.js";
import type { Servers } from "../servers.js";

export class NumbersV2DependentHostedNumberOrder {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  listDependentHostedNumberOrder(
    request: NumbersV2DependentHostedNumberOrder.ListDependentHostedNumberOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<ListDependentHostedNumberOrderResponse, ResponseError> {
    return this.#rawClient.execute<ListDependentHostedNumberOrderResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5(
          "/v2/HostedNumber/AuthorizationDocuments/{SigningDocumentSid}/DependentHostedNumberOrders",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "SigningDocumentSid", value: request.signingDocumentSid, schema: s.string() }],
        query: [
          {
            name: "Status",
            value: request.status,
            schema: s.optional(s.lazy(() => dependentHostedNumberOrderEnumStatusSchema)),
          },
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
        success: { kind: "json", schema: listDependentHostedNumberOrderResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace NumbersV2DependentHostedNumberOrder {
  export type ListDependentHostedNumberOrderRequest = {
    signingDocumentSid: string;
    status?: DependentHostedNumberOrderEnumStatus;
    phoneNumber?: string;
    incomingPhoneNumberSid?: string;
    friendlyName?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
