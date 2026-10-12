import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listMessageInteractionResponseSchema,
  type ListMessageInteractionResponse,
} from "../models/list-message-interaction-response.js";
import {
  proxyV1ServiceSessionParticipantMessageInteractionSchema,
  type ProxyV1ServiceSessionParticipantMessageInteraction,
} from "../models/proxy-v1-service-session-participant-message-interaction.js";
import type { Servers } from "../servers.js";

export class ProxyV1MessageInteraction {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new message Interaction to send directly from your system to one
   * [Participant](https://www.twilio.com/docs/proxy/api/participant). The `inbound` properties for
   * the Interaction will always be empty.
   *
   * @remarks
   * Create a new message Interaction to send directly from your system to one
   * [Participant](https://www.twilio.com/docs/proxy/api/participant). The `inbound` properties for
   * the Interaction will always be empty.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createMessageInteraction(
    request: ProxyV1MessageInteraction.CreateMessageInteractionRequest,
    options?: RequestOptions,
  ): ApiPromise<ProxyV1ServiceSessionParticipantMessageInteraction, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default10(
          "/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{ParticipantSid}/MessageInteractions",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "SessionSid", value: request.sessionSid, schema: s.string() },
          { name: "ParticipantSid", value: request.participantSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Body", value: request.body2, schema: s.optional(s.string()) },
            { name: "MediaUrl", value: request.mediaUrl, schema: s.optional(s.array(s.string())) },
          ],
        },
      },
      {
        success: { kind: "json", schema: proxyV1ServiceSessionParticipantMessageInteractionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  fetchMessageInteraction(
    request: ProxyV1MessageInteraction.FetchMessageInteractionRequest,
    options?: RequestOptions,
  ): ApiPromise<ProxyV1ServiceSessionParticipantMessageInteraction, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default10(
          "/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{ParticipantSid}/MessageInteractions/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "SessionSid", value: request.sessionSid, schema: s.string() },
          { name: "ParticipantSid", value: request.participantSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: proxyV1ServiceSessionParticipantMessageInteractionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  listMessageInteraction(
    request: ProxyV1MessageInteraction.ListMessageInteractionRequest,
    options?: RequestOptions,
  ): ApiPromise<ListMessageInteractionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default10(
          "/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{ParticipantSid}/MessageInteractions",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "SessionSid", value: request.sessionSid, schema: s.string() },
          { name: "ParticipantSid", value: request.participantSid, schema: s.string() },
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
        success: { kind: "json", schema: listMessageInteractionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ProxyV1MessageInteraction {
  export type CreateMessageInteractionRequest = {
    /** The SID of the parent [Service](https://www.twilio.com/docs/proxy/api/service) resource. */
    serviceSid: string;
    /** The SID of the parent [Session](https://www.twilio.com/docs/proxy/api/session) resource. */
    sessionSid: string;
    /** The SID of the [Participant](https://www.twilio.com/docs/proxy/api/participant) resource. */
    participantSid: string;
    /** The message to send to the participant */
    body2?: string;
    /** Reserved. Not currently supported. */
    mediaUrl?: string[];
  };

  export type FetchMessageInteractionRequest = {
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
    /** The SID of the [Participant](https://www.twilio.com/docs/proxy/api/participant) resource. */
    participantSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the MessageInteraction resource to fetch.
     */
    sid: string;
  };

  export type ListMessageInteractionRequest = {
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
     * The SID of the [Participant](https://www.twilio.com/docs/proxy/api/participant) to read the
     * resources from.
     */
    participantSid: string;
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
