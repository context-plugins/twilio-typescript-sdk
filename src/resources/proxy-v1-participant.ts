import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createParticipant2(
    request: ProxyV1Participant.CreateParticipant2Request,
    options?: RequestOptions,
  ): ApiPromise<ProxyV1ServiceSessionParticipant, ResponseError> {
    return this.#rawClient.execute<ProxyV1ServiceSessionParticipant, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default10("/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "SessionSid", value: request.sessionSid, schema: s.string() },
        ],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteParticipant2(
    request: ProxyV1Participant.DeleteParticipant2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default10("/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "SessionSid", value: request.sessionSid, schema: s.string() },
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

  fetchParticipant3(
    request: ProxyV1Participant.FetchParticipant3Request,
    options?: RequestOptions,
  ): ApiPromise<ProxyV1ServiceSessionParticipant, ResponseError> {
    return this.#rawClient.execute<ProxyV1ServiceSessionParticipant, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default10("/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "SessionSid", value: request.sessionSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: proxyV1ServiceSessionParticipantSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listParticipant2(
    request: ProxyV1Participant.ListParticipant2Request,
    options?: RequestOptions,
  ): ApiPromise<ListParticipantResponse1, ResponseError> {
    return this.#rawClient.execute<ListParticipantResponse1, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default10("/v1/Services/{ServiceSid}/Sessions/{SessionSid}/Participants"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "SessionSid", value: request.sessionSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listParticipantResponse1Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace ProxyV1Participant {
  export type CreateParticipant2Request = {
    serviceSid: string;
    sessionSid: string;
    identifier: string;
    friendlyName?: string;
    proxyIdentifier?: string;
    proxyIdentifierSid?: string;
  };

  export type DeleteParticipant2Request = {
    serviceSid: string;
    sessionSid: string;
    sid: string;
  };

  export type FetchParticipant3Request = {
    serviceSid: string;
    sessionSid: string;
    sid: string;
  };

  export type ListParticipant2Request = {
    serviceSid: string;
    sessionSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
