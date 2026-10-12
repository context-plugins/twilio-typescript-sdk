import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  flexV1InsightsQuestionnairesQuestionSchema,
  type FlexV1InsightsQuestionnairesQuestion,
} from "../models/flex-v1-insights-questionnaires-question.js";
import {
  listInsightsQuestionnairesQuestionResponseSchema,
  type ListInsightsQuestionnairesQuestionResponse,
} from "../models/list-insights-questionnaires-question-response.js";
import type { Servers } from "../servers.js";

export class FlexV1InsightsQuestionnairesQuestionApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * To create a question for a Category
   *
   * @remarks
   * To create a question for a Category
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createInsightsQuestionnairesQuestion(
    request: FlexV1InsightsQuestionnairesQuestionApi.CreateInsightsQuestionnairesQuestionRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InsightsQuestionnairesQuestion, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/v1/Insights/QualityManagement/Questions"),
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
            { name: "Question", value: request.question, schema: s.string() },
            { name: "AnswerSetId", value: request.answerSetId, schema: s.string() },
            { name: "AllowNa", value: request.allowNa, schema: s.boolean() },
            { name: "Description", value: request.description, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: flexV1InsightsQuestionnairesQuestionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  deleteInsightsQuestionnairesQuestion(
    request: FlexV1InsightsQuestionnairesQuestionApi.DeleteInsightsQuestionnairesQuestionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default13("/v1/Insights/QualityManagement/Questions/{QuestionSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "QuestionSid", value: request.questionSid, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
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
   * To get all the question for the given categories
   *
   * @remarks
   * To get all the question for the given categories
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listInsightsQuestionnairesQuestion(
    request: FlexV1InsightsQuestionnairesQuestionApi.ListInsightsQuestionnairesQuestionRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInsightsQuestionnairesQuestionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/v1/Insights/QualityManagement/Questions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "CategorySid", value: request.categorySid, schema: s.optional(s.array(s.string())) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInsightsQuestionnairesQuestionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * To update the question
   *
   * @remarks
   * To update the question
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateInsightsQuestionnairesQuestion(
    request: FlexV1InsightsQuestionnairesQuestionApi.UpdateInsightsQuestionnairesQuestionRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InsightsQuestionnairesQuestion, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/v1/Insights/QualityManagement/Questions/{QuestionSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "QuestionSid", value: request.questionSid, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "AllowNa", value: request.allowNa, schema: s.boolean() },
            { name: "CategorySid", value: request.categorySid, schema: s.optional(s.string()) },
            { name: "Question", value: request.question, schema: s.optional(s.string()) },
            { name: "Description", value: request.description, schema: s.optional(s.string()) },
            { name: "AnswerSetId", value: request.answerSetId, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: flexV1InsightsQuestionnairesQuestionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace FlexV1InsightsQuestionnairesQuestionApi {
  export type CreateInsightsQuestionnairesQuestionRequest = {
    /** The Authorization HTTP request header */
    authorization?: string;
    /** The SID of the category */
    categorySid: string;
    /** The question. */
    question: string;
    /** The answer_set for the question. */
    answerSetId: string;
    /** The flag to enable for disable NA for answer. */
    allowNa: boolean;
    /** The description for the question. */
    description?: string;
  };

  export type DeleteInsightsQuestionnairesQuestionRequest = {
    /** The SID of the question */
    questionSid: string;
    /** The Authorization HTTP request header */
    authorization?: string;
  };

  export type ListInsightsQuestionnairesQuestionRequest = {
    /** The list of category SIDs */
    categorySid?: string[];
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

  export type UpdateInsightsQuestionnairesQuestionRequest = {
    /** The SID of the question */
    questionSid: string;
    /** The Authorization HTTP request header */
    authorization?: string;
    /** The flag to enable for disable NA for answer. */
    allowNa: boolean;
    /** The SID of the category */
    categorySid?: string;
    /** The question. */
    question?: string;
    /** The description for the question. */
    description?: string;
    /** The answer_set for the question. */
    answerSetId?: string;
  };
}
