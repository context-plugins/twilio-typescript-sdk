import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  createInsightsAssessmentsComment(
    request: FlexV1InsightsAssessmentsCommentApi.CreateInsightsAssessmentsCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InsightsAssessmentsComment, ResponseError> {
    return this.#rawClient.execute<FlexV1InsightsAssessmentsComment, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/Insights/QualityManagement/Assessments/Comments"),
        auth: this.#auth.accountSidAuthToken,
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "CategoryId", value: request.categoryId, schema: s.string() },
            { name: "CategoryName", value: request.categoryName, schema: s.string() },
            { name: "Comment", value: request.comment, schema: s.string() },
            { name: "SegmentId", value: request.segmentId, schema: s.string() },
            { name: "AgentId", value: request.agentId, schema: s.string() },
            { name: "Offset", value: request.offset, schema: s.number() },
          ],
        },
      },
      {
        success: { kind: "json", schema: flexV1InsightsAssessmentsCommentSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listInsightsAssessmentsComment(
    request: FlexV1InsightsAssessmentsCommentApi.ListInsightsAssessmentsCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInsightsAssessmentsCommentResponse, ResponseError> {
    return this.#rawClient.execute<ListInsightsAssessmentsCommentResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/Insights/QualityManagement/Assessments/Comments"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "SegmentId", value: request.segmentId, schema: s.optional(s.string()) },
          { name: "AgentId", value: request.agentId, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInsightsAssessmentsCommentResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV1InsightsAssessmentsCommentApi {
  export type CreateInsightsAssessmentsCommentRequest = {
    authorization?: string;
    categoryId: string;
    categoryName: string;
    comment: string;
    segmentId: string;
    agentId: string;
    offset: number;
  };

  export type ListInsightsAssessmentsCommentRequest = {
    segmentId?: string;
    agentId?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
    authorization?: string;
  };
}
