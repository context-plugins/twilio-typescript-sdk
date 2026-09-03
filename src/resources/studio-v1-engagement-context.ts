import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  fetchEngagementContext(
    request: StudioV1EngagementContext.FetchEngagementContextRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV1FlowEngagementEngagementContext, ResponseError> {
    return this.#rawClient.execute<StudioV1FlowEngagementEngagementContext, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default11("/v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Context"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "FlowSid", value: request.flowSid, schema: s.string() },
          { name: "EngagementSid", value: request.engagementSid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: studioV1FlowEngagementEngagementContextSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace StudioV1EngagementContext {
  export type FetchEngagementContextRequest = {
    flowSid: string;
    engagementSid: string;
  };
}
