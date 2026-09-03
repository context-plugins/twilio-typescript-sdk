import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  studioV1FlowExecutionExecutionContextSchema,
  type StudioV1FlowExecutionExecutionContext,
} from "../models/studio-v1-flow-execution-execution-context.js";
import type { Servers } from "../servers.js";

export class StudioV2ExecutionContext {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchExecutionContext2(
    request: StudioV2ExecutionContext.FetchExecutionContext2Request,
    options?: RequestOptions,
  ): ApiPromise<StudioV1FlowExecutionExecutionContext, ResponseError> {
    return this.#rawClient.execute<StudioV1FlowExecutionExecutionContext, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default11("/v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Context"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "FlowSid", value: request.flowSid, schema: s.string() },
          { name: "ExecutionSid", value: request.executionSid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: studioV1FlowExecutionExecutionContextSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace StudioV2ExecutionContext {
  export type FetchExecutionContext2Request = {
    flowSid: string;
    executionSid: string;
  };
}
