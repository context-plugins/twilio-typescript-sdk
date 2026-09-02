import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  studioV1FlowExecutionExecutionStepExecutionStepContextSchema,
  type StudioV1FlowExecutionExecutionStepExecutionStepContext,
} from "../models/studio-v1-flow-execution-execution-step-execution-step-context.js";
import type { Servers } from "../servers.js";

export class StudioV2ExecutionStepContext {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchExecutionStepContext2(
    request: StudioV2ExecutionStepContext.FetchExecutionStepContext2Request,
    options?: RequestOptions,
  ): ApiPromise<StudioV1FlowExecutionExecutionStepExecutionStepContext, ResponseError> {
    return this.#rawClient.execute<StudioV1FlowExecutionExecutionStepExecutionStepContext, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default11("/v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{StepSid}/Context"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "FlowSid", value: request.flowSid, schema: s.string() },
          { name: "ExecutionSid", value: request.executionSid, schema: s.string() },
          { name: "StepSid", value: request.stepSid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: studioV1FlowExecutionExecutionStepExecutionStepContextSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace StudioV2ExecutionStepContext {
  export type FetchExecutionStepContext2Request = {
    flowSid: string;
    executionSid: string;
    stepSid: string;
  };
}
