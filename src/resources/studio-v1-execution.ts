import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { executionEnumStatusSchema, type ExecutionEnumStatus } from "../models/execution-enum-status.js";
import {
  listExecutionResponseSchema,
  type ListExecutionResponse,
} from "../models/list-execution-response.js";
import {
  studioV1FlowExecutionSchema,
  type StudioV1FlowExecution,
} from "../models/studio-v1-flow-execution.js";
import type { Servers } from "../servers.js";

export class StudioV1Execution {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Triggers a new Execution for the Flow
   *
   * @remarks
   * Triggers a new Execution for the Flow
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createExecution(
    request: StudioV1Execution.CreateExecutionRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV1FlowExecution, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default11("/v1/Flows/{FlowSid}/Executions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "FlowSid", value: request.flowSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "To", value: request.to, schema: s.string() },
            { name: "From", value: request.from, schema: s.string() },
            {
              name: "Parameters",
              value: request.parameters,
              schema: s.optional(s.record(s.string(), s.unknown())),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: studioV1FlowExecutionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete the Execution and all Steps relating to it.
   *
   * @remarks
   * Delete the Execution and all Steps relating to it.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteExecution(
    request: StudioV1Execution.DeleteExecutionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default11("/v1/Flows/{FlowSid}/Executions/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "FlowSid", value: request.flowSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve an Execution
   *
   * @remarks
   * Retrieve an Execution
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchExecution(
    request: StudioV1Execution.FetchExecutionRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV1FlowExecution, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default11("/v1/Flows/{FlowSid}/Executions/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "FlowSid", value: request.flowSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: studioV1FlowExecutionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Executions for the Flow.
   *
   * @remarks
   * Retrieve a list of all Executions for the Flow.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listExecution(
    request: StudioV1Execution.ListExecutionRequest,
    options?: RequestOptions,
  ): ApiPromise<ListExecutionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default11("/v1/Flows/{FlowSid}/Executions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "FlowSid", value: request.flowSid, schema: s.string() }],
        query: [
          { name: "DateCreatedFrom", value: request.dateCreatedFrom, schema: s.optional(s.dateTime()) },
          { name: "DateCreatedTo", value: request.dateCreatedTo, schema: s.optional(s.dateTime()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listExecutionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update the status of an Execution to `ended`.
   *
   * @remarks
   * Update the status of an Execution to `ended`.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateExecution(
    request: StudioV1Execution.UpdateExecutionRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV1FlowExecution, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default11("/v1/Flows/{FlowSid}/Executions/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "FlowSid", value: request.flowSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "Status", value: request.status, schema: executionEnumStatusSchema }],
        },
      },
      {
        success: { kind: "json", schema: studioV1FlowExecutionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace StudioV1Execution {
  export type CreateExecutionRequest = {
    /** The SID of the Excecution's Flow. */
    flowSid: string;
    /**
     * The Contact phone number to start a Studio Flow Execution, available as variable
     * `{{contact.channel.address}}`.
     */
    to: string;
    /**
     * The Twilio phone number to send messages or initiate calls from during the Flow's Execution.
     * Available as variable `{{flow.channel.address}}`. For SMS, this can also be a Messaging
     * Service SID.
     */
    from: string;
    /**
     * JSON data that will be added to the Flow's context and that can be accessed as variables
     * inside your Flow. For example, if you pass in `Parameters={"name":"Zeke"}`, a widget in your
     * Flow can reference the variable `{{flow.data.name}}`, which returns "Zeke". Note: the JSON
     * value must explicitly be passed as a string, not as a hash object. Depending on your
     * particular HTTP library, you may need to add quotes or URL encode the JSON string.
     */
    parameters?: Record<string, unknown>;
  };

  export type DeleteExecutionRequest = {
    /** The SID of the Flow with the Execution resources to delete. */
    flowSid: string;
    /** The SID of the Execution resource to delete. */
    sid: string;
  };

  export type FetchExecutionRequest = {
    /** The SID of the Flow with the Execution resource to fetch */
    flowSid: string;
    /** The SID of the Execution resource to fetch. */
    sid: string;
  };

  export type ListExecutionRequest = {
    /** The SID of the Flow with the Execution resources to read. */
    flowSid: string;
    /**
     * Only show Execution resources starting on or after this [ISO
     * 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time, given as
     * `YYYY-MM-DDThh:mm:ss-hh:mm`.
     */
    dateCreatedFrom?: Date;
    /**
     * Only show Execution resources starting before this [ISO
     * 8601](https://en.wikipedia.org/wiki/ISO_8601) date-time, given as
     * `YYYY-MM-DDThh:mm:ss-hh:mm`.
     */
    dateCreatedTo?: Date;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateExecutionRequest = {
    /** The SID of the Flow with the Execution resources to update. */
    flowSid: string;
    /** The SID of the Execution resource to update. */
    sid: string;
    /** The status of the Execution. Can be: `active` or `ended`. */
    status: ExecutionEnumStatus;
  };
}
