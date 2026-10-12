import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Retrieve a list of dependent HostedNumberOrders belonging to the AuthorizationDocument.
   *
   * @remarks
   * Retrieve a list of dependent HostedNumberOrders belonging to the AuthorizationDocument.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDependentHostedNumberOrder(
    request: NumbersV2DependentHostedNumberOrder.ListDependentHostedNumberOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<ListDependentHostedNumberOrderResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5(
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
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listDependentHostedNumberOrderResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace NumbersV2DependentHostedNumberOrder {
  export type ListDependentHostedNumberOrderRequest = {
    /**
     * A 34 character string that uniquely identifies the LOA document associated with this
     * HostedNumberOrder.
     */
    signingDocumentSid: string;
    /**
     * Status of an instance resource. It can hold one of the values: 1. opened 2. signing, 3.
     * signed LOA, 4. canceled, 5. failed. See the section entitled [Status
     * Values](https://www.twilio.com/docs/phone-numbers/hosted-numbers/hosted-numbers-api/authorization-document-resource#status-values)
     * for more information on each of these statuses.
     */
    status?: DependentHostedNumberOrderEnumStatus;
    /** An E164 formatted phone number hosted by this HostedNumberOrder. */
    phoneNumber?: string;
    /**
     * A 34 character string that uniquely identifies the IncomingPhoneNumber resource created by
     * this HostedNumberOrder.
     */
    incomingPhoneNumberSid?: string;
    /** A human readable description of this resource, up to 128 characters. */
    friendlyName?: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };
}
