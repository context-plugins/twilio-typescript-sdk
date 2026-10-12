import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  listFlowRevisionResponseSchema,
  type ListFlowRevisionResponse,
} from "../models/list-flow-revision-response.js";
import {
  studioV2FlowFlowRevisionSchema,
  type StudioV2FlowFlowRevision,
} from "../models/studio-v2-flow-flow-revision.js";
import type { Servers } from "../servers.js";

export class StudioV2FlowRevision {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve a specific Flow revision.
   *
   * @remarks
   * Retrieve a specific Flow revision.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchFlowRevision(
    request: StudioV2FlowRevision.FetchFlowRevisionRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV2FlowFlowRevision, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default11("/v2/Flows/{Sid}/Revisions/{Revision}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "Sid", value: request.sid, schema: s.string() },
          { name: "Revision", value: request.revision, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: studioV2FlowFlowRevisionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Flows revisions.
   *
   * @remarks
   * Retrieve a list of all Flows revisions.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listFlowRevision(
    request: StudioV2FlowRevision.ListFlowRevisionRequest,
    options?: RequestOptions,
  ): ApiPromise<ListFlowRevisionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default11("/v2/Flows/{Sid}/Revisions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listFlowRevisionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace StudioV2FlowRevision {
  export type FetchFlowRevisionRequest = {
    /** The SID of the Flow resource to fetch. */
    sid: string;
    /** Specific Revision number or can be `LatestPublished` and `LatestRevision`. */
    revision: string;
  };

  export type ListFlowRevisionRequest = {
    /** The SID of the Flow resource to fetch. */
    sid: string;
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
