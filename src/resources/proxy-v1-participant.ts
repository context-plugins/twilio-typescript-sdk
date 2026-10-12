import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listParticipantResponse1Schema,
  type ListParticipantResponse1,
} from "../models/list-participant-response1.js";
import {
  proxyV1ServiceSessionParticipantSchema,
  type ProxyV1ServiceSessionParticipant,
} from "../models/proxy-v1-service-session-participant.js";
import type { Servers } from "../servers.js";

export class ProxyV1Participant {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add a new Participant to the Session
   *
   * @remarks
   * Add a new Participant to the Session
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createParticipant2(
    request: ProxyV1Participant.CreateParticipant2Request,
    options?: RequestOptions,
  ): ApiPromise<ProxyV1ServiceSessionParticipant, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default10("/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "SessionSid", value: request.sessionSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Identifier", value: request.identifier, schema: s.string() },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "ProxyIdentifier", value: request.proxyIdentifier, schema: s.optional(s.string()) },
            { name: "ProxyIdentifierSid", value: request.proxyIdentifierSid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: proxyV1ServiceSessionParticipantSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a specific Participant. This is a soft-delete. The participant remains associated with
   * the session and cannot be re-added. Participants are only permanently deleted when the
   * [Session](https://www.twilio.com/docs/proxy/api/session) is deleted.
   *
   * @remarks
   * Delete a specific Participant. This is a soft-delete. The participant remains associated with
   * the session and cannot be re-added. Participants are only permanently deleted when the
   * [Session](https://www.twilio.com/docs/proxy/api/session) is deleted.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteParticipant2(
    request: ProxyV1Participant.DeleteParticipant2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default10(
          "/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{Sid}",
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
   * Fetch a specific Participant.
   *
   * @remarks
   * Fetch a specific Participant.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchParticipant3(
    request: ProxyV1Participant.FetchParticipant3Request,
    options?: RequestOptions,
  ): ApiPromise<ProxyV1ServiceSessionParticipant, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default10(
          "/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{Sid}",
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
        success: { kind: "json", schema: proxyV1ServiceSessionParticipantSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Participants in a Session.
   *
   * @remarks
   * Retrieve a list of all Participants in a Session.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listParticipant2(
    request: ProxyV1Participant.ListParticipant2Request,
    options?: RequestOptions,
  ): ApiPromise<ListParticipantResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default10("/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants"),
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
        success: { kind: "json", schema: listParticipantResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ProxyV1Participant {
  export type CreateParticipant2Request = {
    /** The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) resource. */
    serviceSid: string;
    /** The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) resource. */
    sessionSid: string;
    /** The phone number of the Participant. */
    identifier: string;
    /**
     * The string that you assigned to describe the participant. This value must be 255 characters
     * or fewer. **This value should not have PII.**
     */
    friendlyName?: string;
    /**
     * The proxy phone number to use for the Participant. If not specified, Proxy will select a
     * number from the pool.
     */
    proxyIdentifier?: string;
    /** The SID of the Proxy Identifier to assign to the Participant. */
    proxyIdentifierSid?: string;
  };

  export type DeleteParticipant2Request = {
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
    /** The Twilio-provided string that uniquely identifies the Participant resource to delete. */
    sid: string;
  };

  export type FetchParticipant3Request = {
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
    /** The Twilio-provided string that uniquely identifies the Participant resource to fetch. */
    sid: string;
  };

  export type ListParticipant2Request = {
    /**
     * The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) of the
     * resources to read.
     */
    serviceSid: string;
    /**
     * The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) of the
     * resources to read.
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
