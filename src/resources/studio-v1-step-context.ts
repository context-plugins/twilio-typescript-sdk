import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  studioV1FlowEngagementStepStepContextSchema,
  type StudioV1FlowEngagementStepStepContext,
} from "../models/studio-v1-flow-engagement-step-step-context.js";
import type { Servers } from "../servers.js";

export class StudioV1StepContext {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchStepContext(
    request: StudioV1StepContext.FetchStepContextRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV1FlowEngagementStepStepContext, ResponseError> {
    return this.#rawClient.execute<StudioV1FlowEngagementStepStepContext, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default11(
          "/v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Steps/{StepSid}/Context",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "FlowSid", value: request.flowSid, schema: s.string() },
          { name: "EngagementSid", value: request.engagementSid, schema: s.string() },
          { name: "StepSid", value: request.stepSid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: studioV1FlowEngagementStepStepContextSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace StudioV1StepContext {
  export type FetchStepContextRequest = {
    flowSid: string;
    engagementSid: string;
    stepSid: string;
  };
}
