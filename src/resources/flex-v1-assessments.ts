import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  flexV1InsightsAssessmentsSchema,
  type FlexV1InsightsAssessments,
} from "../models/flex-v1-insights-assessments.js";
import {
  listInsightsAssessmentsResponseSchema,
  type ListInsightsAssessmentsResponse,
} from "../models/list-insights-assessments-response.js";
import type { Servers } from "../servers.js";

export class FlexV1Assessments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createInsightsAssessments(
    request: FlexV1Assessments.CreateInsightsAssessmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InsightsAssessments, ResponseError> {
    return this.#rawClient.execute<FlexV1InsightsAssessments, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/Insights/QualityManagement/Assessments"),
        auth: this.#auth.accountSidAuthToken,
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "CategorySid", value: request.categorySid, schema: s.string() },
            { name: "CategoryName", value: request.categoryName, schema: s.string() },
            { name: "SegmentId", value: request.segmentId, schema: s.string() },
            { name: "AgentId", value: request.agentId, schema: s.string() },
            { name: "Offset", value: request.offset, schema: s.number() },
            { name: "MetricId", value: request.metricId, schema: s.string() },
            { name: "MetricName", value: request.metricName, schema: s.string() },
            { name: "AnswerText", value: request.answerText, schema: s.string() },
            { name: "AnswerId", value: request.answerId, schema: s.string() },
            { name: "QuestionnaireSid", value: request.questionnaireSid, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: flexV1InsightsAssessmentsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listInsightsAssessments(
    request: FlexV1Assessments.ListInsightsAssessmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInsightsAssessmentsResponse, ResponseError> {
    return this.#rawClient.execute<ListInsightsAssessmentsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/Insights/QualityManagement/Assessments"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "SegmentId", value: request.segmentId, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInsightsAssessmentsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateInsightsAssessments(
    request: FlexV1Assessments.UpdateInsightsAssessmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InsightsAssessments, ResponseError> {
    return this.#rawClient.execute<FlexV1InsightsAssessments, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/Insights/QualityManagement/Assessments/{AssessmentSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AssessmentSid", value: request.assessmentSid, schema: s.string() }],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Offset", value: request.offset, schema: s.number() },
            { name: "AnswerText", value: request.answerText, schema: s.string() },
            { name: "AnswerId", value: request.answerId, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: flexV1InsightsAssessmentsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV1Assessments {
  export type CreateInsightsAssessmentsRequest = {
    authorization?: string;
    categorySid: string;
    categoryName: string;
    segmentId: string;
    agentId: string;
    offset: number;
    metricId: string;
    metricName: string;
    answerText: string;
    answerId: string;
    questionnaireSid: string;
  };

  export type ListInsightsAssessmentsRequest = {
    segmentId?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
    authorization?: string;
  };

  export type UpdateInsightsAssessmentsRequest = {
    assessmentSid: string;
    authorization?: string;
    offset: number;
    answerText: string;
    answerId: string;
  };
}
