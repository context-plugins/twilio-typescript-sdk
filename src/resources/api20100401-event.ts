import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  listCallEventResponseSchema,
  type ListCallEventResponse,
} from "../models/list-call-event-response.js";
import type { Servers } from "../servers.js";

export class Api20100401Event {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  listCallEvent(
    request: Api20100401Event.ListCallEventRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCallEventResponse, ResponseError> {
    return this.#rawClient.execute<ListCallEventResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Events.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCallEventResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401Event {
  export type ListCallEventRequest = {
    accountSid: string;
    callSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
