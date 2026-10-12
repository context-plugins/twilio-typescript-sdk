import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  flexV1InsightsAssessmentsCommentSchema,
  type FlexV1InsightsAssessmentsComment,
} from "../models/flex-v1-insights-assessments-comment.js";
import {
  listInsightsAssessmentsCommentResponseSchema,
  type ListInsightsAssessmentsCommentResponse,
} from "../models/list-insights-assessments-comment-response.js";
import type { Servers } from "../servers.js";

export class FlexV1InsightsAssessmentsCommentApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * To create a comment assessment for a conversation
   *
   * @remarks
   * To create a comment assessment for a conversation
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createInsightsAssessmentsComment(
    request: FlexV1InsightsAssessmentsCommentApi.CreateInsightsAssessmentsCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InsightsAssessmentsComment, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/v1/Insights/QualityManagement/Assessments/Comments"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "CategoryId", value: request.categoryId, schema: s.string() },
            { name: "CategoryName", value: request.categoryName, schema: s.string() },
            { name: "Comment", value: request.comment, schema: s.string() },
            { name: "SegmentId", value: request.segmentId, schema: s.string() },
            { name: "AgentId", value: request.agentId, schema: s.string() },
            { name: "Offset", value: request.offset, schema: s.float64() },
          ],
        },
      },
      {
        success: { kind: "json", schema: flexV1InsightsAssessmentsCommentSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * To create a comment assessment for a conversation
   *
   * @remarks
   * To create a comment assessment for a conversation
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listInsightsAssessmentsComment(
    request: FlexV1InsightsAssessmentsCommentApi.ListInsightsAssessmentsCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInsightsAssessmentsCommentResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/v1/Insights/QualityManagement/Assessments/Comments"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "SegmentId", value: request.segmentId, schema: s.optional(s.string()) },
          { name: "AgentId", value: request.agentId, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInsightsAssessmentsCommentResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace FlexV1InsightsAssessmentsCommentApi {
  export type CreateInsightsAssessmentsCommentRequest = {
    /** The Authorization HTTP request header */
    authorization?: string;
    /** The ID of the category */
    categoryId: string;
    /** The name of the category */
    categoryName: string;
    /** The Assessment comment. */
    comment: string;
    /** The id of the segment. */
    segmentId: string;
    /** The id of the agent. */
    agentId: string;
    /** The offset */
    offset: number;
  };

  export type ListInsightsAssessmentsCommentRequest = {
    /** The id of the segment. */
    segmentId?: string;
    /** The id of the agent. */
    agentId?: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
    /** The Authorization HTTP request header */
    authorization?: string;
  };
}
