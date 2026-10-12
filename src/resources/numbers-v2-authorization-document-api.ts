import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  authorizationDocumentEnumStatusSchema,
  type AuthorizationDocumentEnumStatus,
} from "../models/authorization-document-enum-status.js";
import {
  listAuthorizationDocumentResponseSchema,
  type ListAuthorizationDocumentResponse,
} from "../models/list-authorization-document-response.js";
import {
  numbersV2AuthorizationDocumentSchema,
  type NumbersV2AuthorizationDocument,
} from "../models/numbers-v2-authorization-document.js";
import type { Servers } from "../servers.js";

export class NumbersV2AuthorizationDocumentApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create an AuthorizationDocument for authorizing the hosting of phone number capabilities on
   * Twilio's platform.
   *
   * @remarks
   * Create an AuthorizationDocument for authorizing the hosting of phone number capabilities on
   * Twilio's platform.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createAuthorizationDocument(
    request: NumbersV2AuthorizationDocumentApi.CreateAuthorizationDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2AuthorizationDocument, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default5("/v2/HostedNumber/AuthorizationDocuments"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "AddressSid", value: request.addressSid, schema: s.string() },
            { name: "Email", value: request.email, schema: s.string() },
            { name: "ContactPhoneNumber", value: request.contactPhoneNumber, schema: s.string() },
            {
              name: "HostedNumberOrderSids",
              value: request.hostedNumberOrderSids,
              schema: s.array(s.string()),
            },
            { name: "ContactTitle", value: request.contactTitle, schema: s.optional(s.string()) },
            { name: "CcEmails", value: request.ccEmails, schema: s.optional(s.array(s.string())) },
          ],
        },
      },
      {
        success: { kind: "json", schema: numbersV2AuthorizationDocumentSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Cancel the AuthorizationDocument request.
   *
   * @remarks
   * Cancel the AuthorizationDocument request.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAuthorizationDocument(
    request: NumbersV2AuthorizationDocumentApi.DeleteAuthorizationDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default5("/v2/HostedNumber/AuthorizationDocuments/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
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
   * Fetch a specific AuthorizationDocument.
   *
   * @remarks
   * Fetch a specific AuthorizationDocument.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchAuthorizationDocument(
    request: NumbersV2AuthorizationDocumentApi.FetchAuthorizationDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2AuthorizationDocument, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5("/v2/HostedNumber/AuthorizationDocuments/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV2AuthorizationDocumentSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of AuthorizationDocuments belonging to the account initiating the request.
   *
   * @remarks
   * Retrieve a list of AuthorizationDocuments belonging to the account initiating the request.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAuthorizationDocument(
    request: NumbersV2AuthorizationDocumentApi.ListAuthorizationDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<ListAuthorizationDocumentResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5("/v2/HostedNumber/AuthorizationDocuments"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "Email", value: request.email, schema: s.optional(s.string()) },
          {
            name: "Status",
            value: request.status,
            schema: s.optional(s.lazy(() => authorizationDocumentEnumStatusSchema)),
          },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listAuthorizationDocumentResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace NumbersV2AuthorizationDocumentApi {
  export type CreateAuthorizationDocumentRequest = {
    /**
     * A 34 character string that uniquely identifies the Address resource that is associated with
     * this AuthorizationDocument.
     */
    addressSid: string;
    /** Email that this AuthorizationDocument will be sent to for signing. */
    email: string;
    /** The contact phone number of the person authorized to sign the Authorization Document. */
    contactPhoneNumber: string;
    /**
     * A list of HostedNumberOrder sids that this AuthorizationDocument will authorize for hosting
     * phone number capabilities on Twilio's platform.
     */
    hostedNumberOrderSids: string[];
    /**
     * The title of the person authorized to sign the Authorization Document for this phone number.
     */
    contactTitle?: string;
    /**
     * Email recipients who will be informed when an Authorization Document has been sent and
     * signed.
     */
    ccEmails?: string[];
  };

  export type DeleteAuthorizationDocumentRequest = {
    /** A 34 character string that uniquely identifies this AuthorizationDocument. */
    sid: string;
  };

  export type FetchAuthorizationDocumentRequest = {
    /** A 34 character string that uniquely identifies this AuthorizationDocument. */
    sid: string;
  };

  export type ListAuthorizationDocumentRequest = {
    /** Email that this AuthorizationDocument will be sent to for signing. */
    email?: string;
    /**
     * Status of an instance resource. It can hold one of the values: 1. opened 2. signing, 3.
     * signed LOA, 4. canceled, 5. failed. See the section entitled [Status
     * Values](https://www.twilio.com/docs/phone-numbers/hosted-numbers/hosted-numbers-api/authorization-document-resource#status-values)
     * for more information on each of these statuses.
     */
    status?: AuthorizationDocumentEnumStatus;
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
