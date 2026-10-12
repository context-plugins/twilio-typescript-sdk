import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  studioV1FlowEngagementEngagementContextSchema,
  type StudioV1FlowEngagementEngagementContext,
} from "../models/studio-v1-flow-engagement-engagement-context.js";
import type { Servers } from "../servers.js";

export class StudioV1EngagementContext {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve the most recent context for an Engagement.
   *
   * @remarks
   * Retrieve the most recent context for an Engagement.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchEngagementContext(
    request: StudioV1EngagementContext.FetchEngagementContextRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV1FlowEngagementEngagementContext, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default11("/v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Context"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "FlowSid", value: request.flowSid, schema: s.string() },
          { name: "EngagementSid", value: request.engagementSid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: studioV1FlowEngagementEngagementContextSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace StudioV1EngagementContext {
  export type FetchEngagementContextRequest = {
    /** The SID of the Flow. */
    flowSid: string;
    /** The SID of the Engagement. */
    engagementSid: string;
  };
}
