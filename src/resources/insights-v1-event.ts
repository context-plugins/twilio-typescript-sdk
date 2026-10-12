import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * Get a list of Call Insight Events for a Call.
   *
   * @remarks
   * Get a list of Call Insight Events for a Call.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEvent2(
    request: InsightsV1Event.ListEvent2Request,
    options?: RequestOptions,
  ): ApiPromise<ListEventResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default14("/v1/Voice/{CallSid}/Events"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "CallSid", value: request.callSid, schema: s.string() }],
        query: [
          { name: "Edge", value: request.edge, schema: s.optional(s.lazy(() => eventEnumTwilioEdgeSchema)) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listEventResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace InsightsV1Event {
  export type ListEvent2Request = {
    /** The unique SID identifier of the Call. */
    callSid: string;
    /**
     * The Edge of this Event. One of `unknown_edge`, `carrier_edge`, `sip_edge`, `sdk_edge` or
     * `client_edge`.
     */
    edge?: EventEnumTwilioEdge;
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
