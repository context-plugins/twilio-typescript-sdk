import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { eventEnumTwilioEdgeSchema, type EventEnumTwilioEdge } from "../models/event-enum-twilio-edge.js";
import { listEventResponse1Schema, type ListEventResponse1 } from "../models/list-event-response1.js";
import type { Servers } from "../servers.js";

export class InsightsV1Event {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  listEvent2(
    request: InsightsV1Event.ListEvent2Request,
    options?: RequestOptions,
  ): ApiPromise<ListEventResponse1, ResponseError> {
    return this.#rawClient.execute<ListEventResponse1, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default14("/v1/Voice/{CallSid}/Events"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "CallSid", value: request.callSid, schema: s.string() }],
        query: [
          { name: "Edge", value: request.edge, schema: s.optional(s.lazy(() => eventEnumTwilioEdgeSchema)) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listEventResponse1Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace InsightsV1Event {
  export type ListEvent2Request = {
    callSid: string;
    edge?: EventEnumTwilioEdge;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
