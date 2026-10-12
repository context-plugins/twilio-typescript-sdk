import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  studioV1FlowExecutionExecutionStepExecutionStepContextSchema,
  type StudioV1FlowExecutionExecutionStepExecutionStepContext,
} from "../models/studio-v1-flow-execution-execution-step-execution-step-context.js";
import type { Servers } from "../servers.js";

export class StudioV1ExecutionStepContext {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve the context for an Execution Step.
   *
   * @remarks
   * Retrieve the context for an Execution Step.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchExecutionStepContext(
    request: StudioV1ExecutionStepContext.FetchExecutionStepContextRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV1FlowExecutionExecutionStepExecutionStepContext, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default11(
          "/v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{StepSid}/Context",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "FlowSid", value: request.flowSid, schema: s.string() },
          { name: "ExecutionSid", value: request.executionSid, schema: s.string() },
          { name: "StepSid", value: request.stepSid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: studioV1FlowExecutionExecutionStepExecutionStepContextSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace StudioV1ExecutionStepContext {
  export type FetchExecutionStepContextRequest = {
    /** The SID of the Flow with the Step to fetch. */
    flowSid: string;
    /** The SID of the Execution resource with the Step to fetch. */
    executionSid: string;
    /** The SID of the Step to fetch. */
    stepSid: string;
  };
}
