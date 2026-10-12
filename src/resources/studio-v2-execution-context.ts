import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * Retrieve the most recent context for an Execution.
   *
   * @remarks
   * Retrieve the most recent context for an Execution.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchExecutionContext2(
    request: StudioV2ExecutionContext.FetchExecutionContext2Request,
    options?: RequestOptions,
  ): ApiPromise<StudioV1FlowExecutionExecutionContext, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default11("/v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Context"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "FlowSid", value: request.flowSid, schema: s.string() },
          { name: "ExecutionSid", value: request.executionSid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: studioV1FlowExecutionExecutionContextSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace StudioV2ExecutionContext {
  export type FetchExecutionContext2Request = {
    /** The SID of the Flow with the Execution context to fetch. */
    flowSid: string;
    /** The SID of the Execution context to fetch. */
    executionSid: string;
  };
}
