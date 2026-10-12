import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { listStepResponseSchema, type ListStepResponse } from "../models/list-step-response.js";
import {
  studioV1FlowEngagementStepSchema,
  type StudioV1FlowEngagementStep,
} from "../models/studio-v1-flow-engagement-step.js";
import type { Servers } from "../servers.js";

export class StudioV1Step {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve a Step.
   *
   * @remarks
   * Retrieve a Step.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchStep(
    request: StudioV1Step.FetchStepRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV1FlowEngagementStep, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default11("/v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Steps/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "FlowSid", value: request.flowSid, schema: s.string() },
          { name: "EngagementSid", value: request.engagementSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: studioV1FlowEngagementStepSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Steps for an Engagement.
   *
   * @remarks
   * Retrieve a list of all Steps for an Engagement.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listStep(
    request: StudioV1Step.ListStepRequest,
    options?: RequestOptions,
  ): ApiPromise<ListStepResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default11("/v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Steps"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "FlowSid", value: request.flowSid, schema: s.string() },
          { name: "EngagementSid", value: request.engagementSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listStepResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace StudioV1Step {
  export type FetchStepRequest = {
    /** The SID of the Flow with the Step to fetch. */
    flowSid: string;
    /** The SID of the Engagement with the Step to fetch. */
    engagementSid: string;
    /** The SID of the Step resource to fetch. */
    sid: string;
  };

  export type ListStepRequest = {
    /** The SID of the Flow with the Step to read. */
    flowSid: string;
    /** The SID of the Engagement with the Step to read. */
    engagementSid: string;
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
