import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listInteractionResponseSchema,
  type ListInteractionResponse,
} from "../models/list-interaction-response.js";
import {
  proxyV1ServiceSessionInteractionSchema,
  type ProxyV1ServiceSessionInteraction,
} from "../models/proxy-v1-service-session-interaction.js";
import type { Servers } from "../servers.js";

export class ProxyV1Interaction {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a specific Interaction.
   *
   * @remarks
   * Delete a specific Interaction.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteInteraction(
    request: ProxyV1Interaction.DeleteInteractionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default10(
          "/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Interactions/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "SessionSid", value: request.sessionSid, schema: s.string() },
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
   * Retrieve a list of Interactions for a given
   * [Session](https://www.twilio.com/docs/proxy/api/session).
   *
   * @remarks
   * Retrieve a list of Interactions for a given
   * [Session](https://www.twilio.com/docs/proxy/api/session).
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchInteraction(
    request: ProxyV1Interaction.FetchInteractionRequest,
    options?: RequestOptions,
  ): ApiPromise<ProxyV1ServiceSessionInteraction, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default10(
          "/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Interactions/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "SessionSid", value: request.sessionSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: proxyV1ServiceSessionInteractionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Interactions for a Session. A maximum of 100 records will be returned
   * per page.
   *
   * @remarks
   * Retrieve a list of all Interactions for a Session. A maximum of 100 records will be returned
   * per page.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listInteraction(
    request: ProxyV1Interaction.ListInteractionRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInteractionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default10("/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Interactions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "SessionSid", value: request.sessionSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInteractionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ProxyV1Interaction {
  export type DeleteInteractionRequest = {
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the
     * resource to delete.
     */
    serviceSid: string;
    /**
     * The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) of the
     * resource to delete.
     */
    sessionSid: string;
    /** The Twilio-provided string that uniquely identifies the Interaction resource to delete. */
    sid: string;
  };

  export type FetchInteractionRequest = {
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the
     * resource to fetch.
     */
    serviceSid: string;
    /**
     * The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) of the
     * resource to fetch.
     */
    sessionSid: string;
    /** The Twilio-provided string that uniquely identifies the Interaction resource to fetch. */
    sid: string;
  };

  export type ListInteractionRequest = {
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) to read the
     * resources from.
     */
    serviceSid: string;
    /**
     * The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) to read the
     * resources from.
     */
    sessionSid: string;
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
