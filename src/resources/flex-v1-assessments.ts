import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Add assessments against conversation to dynamo db. Used in assessments screen by user. Users
   * can select the questionnaire and pick up answers for each and every question.
   *
   * @remarks
   * Add assessments against conversation to dynamo db. Used in assessments screen by user. Users
   * can select the questionnaire and pick up answers for each and every question.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createInsightsAssessments(
    request: FlexV1Assessments.CreateInsightsAssessmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InsightsAssessments, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/v1/Insights/QualityManagement/Assessments"),
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
            { name: "CategorySid", value: request.categorySid, schema: s.string() },
            { name: "CategoryName", value: request.categoryName, schema: s.string() },
            { name: "SegmentId", value: request.segmentId, schema: s.string() },
            { name: "AgentId", value: request.agentId, schema: s.string() },
            { name: "Offset", value: request.offset, schema: s.float64() },
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get assessments done for a conversation by logged in user
   *
   * @remarks
   * Get assessments done for a conversation by logged in user
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listInsightsAssessments(
    request: FlexV1Assessments.ListInsightsAssessmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInsightsAssessmentsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/v1/Insights/QualityManagement/Assessments"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "SegmentId", value: request.segmentId, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInsightsAssessmentsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a specific Assessment assessed earlier
   *
   * @remarks
   * Update a specific Assessment assessed earlier
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateInsightsAssessments(
    request: FlexV1Assessments.UpdateInsightsAssessmentsRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InsightsAssessments, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/v1/Insights/QualityManagement/Assessments/{AssessmentSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AssessmentSid", value: request.assessmentSid, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Offset", value: request.offset, schema: s.float64() },
            { name: "AnswerText", value: request.answerText, schema: s.string() },
            { name: "AnswerId", value: request.answerId, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: flexV1InsightsAssessmentsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace FlexV1Assessments {
  export type CreateInsightsAssessmentsRequest = {
    /** The Authorization HTTP request header */
    authorization?: string;
    /** The SID of the category */
    categorySid: string;
    /** The name of the category */
    categoryName: string;
    /** Segment Id of the conversation */
    segmentId: string;
    /** The id of the Agent */
    agentId: string;
    /** The offset of the conversation. */
    offset: number;
    /** The question SID selected for assessment */
    metricId: string;
    /** The question name of the assessment */
    metricName: string;
    /** The answer text selected by user */
    answerText: string;
    /** The id of the answer selected by user */
    answerId: string;
    /** Questionnaire SID of the associated question */
    questionnaireSid: string;
  };

  export type ListInsightsAssessmentsRequest = {
    /** The id of the segment. */
    segmentId?: string;
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

  export type UpdateInsightsAssessmentsRequest = {
    /** The SID of the assessment to be modified */
    assessmentSid: string;
    /** The Authorization HTTP request header */
    authorization?: string;
    /** The offset of the conversation */
    offset: number;
    /** The answer text selected by user */
    answerText: string;
    /** The id of the answer selected by user */
    answerId: string;
  };
}
