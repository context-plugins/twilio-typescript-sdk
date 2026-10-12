import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listEngagementResponseSchema,
  type ListEngagementResponse,
} from "../models/list-engagement-response.js";
import {
  studioV1FlowEngagementSchema,
  type StudioV1FlowEngagement,
} from "../models/studio-v1-flow-engagement.js";
import type { Servers } from "../servers.js";

export class StudioV1Engagement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Triggers a new Engagement for the Flow
   *
   * @remarks
   * Triggers a new Engagement for the Flow
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createEngagement(
    request: StudioV1Engagement.CreateEngagementRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV1FlowEngagement, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default11("/v1/Flows/{FlowSid}/Engagements"),
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
        success: { kind: "json", schema: studioV1FlowEngagementSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete this Engagement and all Steps relating to it.
   *
   * @remarks
   * Delete this Engagement and all Steps relating to it.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteEngagement(
    request: StudioV1Engagement.DeleteEngagementRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default11("/v1/Flows/{FlowSid}/Engagements/{Sid}"),
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
   * Retrieve an Engagement
   *
   * @remarks
   * Retrieve an Engagement
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchEngagement(
    request: StudioV1Engagement.FetchEngagementRequest,
    options?: RequestOptions,
  ): ApiPromise<StudioV1FlowEngagement, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default11("/v1/Flows/{FlowSid}/Engagements/{Sid}"),
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
        success: { kind: "json", schema: studioV1FlowEngagementSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Engagements for the Flow.
   *
   * @remarks
   * Retrieve a list of all Engagements for the Flow.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEngagement(
    request: StudioV1Engagement.ListEngagementRequest,
    options?: RequestOptions,
  ): ApiPromise<ListEngagementResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default11("/v1/Flows/{FlowSid}/Engagements"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "FlowSid", value: request.flowSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listEngagementResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace StudioV1Engagement {
  export type CreateEngagementRequest = {
    /** The SID of the Flow. */
    flowSid: string;
    /**
     * The Contact phone number to start a Studio Flow Engagement, available as variable
     * `{{contact.channel.address}}`.
     */
    to: string;
    /**
     * The Twilio phone number to send messages or initiate calls from during the Flow Engagement.
     * Available as variable `{{flow.channel.address}}`
     */
    from: string;
    /**
     * A JSON string we will add to your flow's context and that you can access as variables inside
     * your flow. For example, if you pass in `Parameters={'name':'Zeke'}` then inside a widget you
     * can reference the variable `{{flow.data.name}}` which will return the string 'Zeke'. Note:
     * the JSON value must explicitly be passed as a string, not as a hash object. Depending on your
     * particular HTTP library, you may need to add quotes or URL encode your JSON string.
     */
    parameters?: Record<string, unknown>;
  };

  export type DeleteEngagementRequest = {
    /** The SID of the Flow to delete Engagements from. */
    flowSid: string;
    /** The SID of the Engagement resource to delete. */
    sid: string;
  };

  export type FetchEngagementRequest = {
    /** The SID of the Flow. */
    flowSid: string;
    /** The SID of the Engagement resource to fetch. */
    sid: string;
  };

  export type ListEngagementRequest = {
    /** The SID of the Flow to read Engagements from. */
    flowSid: string;
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
