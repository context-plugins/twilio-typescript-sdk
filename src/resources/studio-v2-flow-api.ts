import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { flowEnumStatusSchema, type FlowEnumStatus } from "../models/flow-enum-status.js";
import { listFlowResponse1Schema, type ListFlowResponse1 } from "../models/list-flow-response1.js";
import { studioV2FlowSchema, type StudioV2Flow } from "../models/studio-v2-flow.js";
import type { Servers } from "../servers.js";

export class StudioV2FlowApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Flow.
   *
   * @remarks
   * Create a Flow.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createFlow(
    request: StudioV2FlowApi.CreateFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV2Flow, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default11("/v2/Flows"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "Status", value: request.status, schema: flowEnumStatusSchema },
            { name: "Definition", value: request.definition, schema: s.record(s.string(), s.unknown()) },
            { name: "CommitMessage", value: request.commitMessage, schema: s.optional(s.string()) },
            { name: "AuthorSid", value: request.authorSid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: studioV2FlowSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a specific Flow.
   *
   * @remarks
   * Delete a specific Flow.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteFlow2(
    request: StudioV2FlowApi.DeleteFlow2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default11("/v2/Flows/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
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
   * Retrieve a specific Flow.
   *
   * @remarks
   * Retrieve a specific Flow.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchFlow2(
    request: StudioV2FlowApi.FetchFlow2Request,
    options?: RequestOptions,
  ): ApiPromise<StudioV2Flow, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default11("/v2/Flows/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: studioV2FlowSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Flows.
   *
   * @remarks
   * Retrieve a list of all Flows.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listFlow2(
    request: StudioV2FlowApi.ListFlow2Request,
    options?: RequestOptions,
  ): ApiPromise<ListFlowResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default11("/v2/Flows"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listFlowResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a Flow.
   *
   * @remarks
   * Update a Flow.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateFlow(
    request: StudioV2FlowApi.UpdateFlowRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV2Flow, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default11("/v2/Flows/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Status", value: request.status, schema: flowEnumStatusSchema },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            {
              name: "Definition",
              value: request.definition,
              schema: s.optional(s.record(s.string(), s.unknown())),
            },
            { name: "CommitMessage", value: request.commitMessage, schema: s.optional(s.string()) },
            { name: "AuthorSid", value: request.authorSid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: studioV2FlowSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace StudioV2FlowApi {
  export type CreateFlowRequest = {
    /** The string that you assigned to describe the Flow. */
    friendlyName: string;
    /** The status of the Flow. Can be: `draft` or `published`. */
    status: FlowEnumStatus;
    /** JSON representation of flow definition. */
    definition: Record<string, unknown>;
    /** Description of change made in the revision. */
    commitMessage?: string;
    /** The SID of the User that created the Flow. */
    authorSid?: string;
  };

  export type DeleteFlow2Request = {
    /** The SID of the Flow resource to delete. */
    sid: string;
  };

  export type FetchFlow2Request = {
    /** The SID of the Flow resource to fetch. */
    sid: string;
  };

  export type ListFlow2Request = {
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateFlowRequest = {
    /** The SID of the Flow resource to fetch. */
    sid: string;
    /** The status of the Flow. Can be: `draft` or `published`. */
    status: FlowEnumStatus;
    /** The string that you assigned to describe the Flow. */
    friendlyName?: string;
    /** JSON representation of flow definition. */
    definition?: Record<string, unknown>;
    /** Description of change made in the revision. */
    commitMessage?: string;
    /** The SID of the User that created or last updated the Flow. */
    authorSid?: string;
  };
}
