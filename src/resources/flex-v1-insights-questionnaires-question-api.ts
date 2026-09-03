import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createInsightsQuestionnairesQuestion(
    request: FlexV1InsightsQuestionnairesQuestionApi.CreateInsightsQuestionnairesQuestionRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InsightsQuestionnairesQuestion, ResponseError> {
    return this.#rawClient.execute<FlexV1InsightsQuestionnairesQuestion, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/Insights/QualityManagement/Questions"),
        auth: this.#auth.accountSidAuthToken,
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteInsightsQuestionnairesQuestion(
    request: FlexV1InsightsQuestionnairesQuestionApi.DeleteInsightsQuestionnairesQuestionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default13("/v1/Insights/QualityManagement/Questions/{QuestionSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "QuestionSid", value: request.questionSid, schema: s.string() }],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listInsightsQuestionnairesQuestion(
    request: FlexV1InsightsQuestionnairesQuestionApi.ListInsightsQuestionnairesQuestionRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInsightsQuestionnairesQuestionResponse, ResponseError> {
    return this.#rawClient.execute<ListInsightsQuestionnairesQuestionResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/Insights/QualityManagement/Questions"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "CategorySid", value: request.categorySid, schema: s.optional(s.array(s.string())) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInsightsQuestionnairesQuestionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateInsightsQuestionnairesQuestion(
    request: FlexV1InsightsQuestionnairesQuestionApi.UpdateInsightsQuestionnairesQuestionRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InsightsQuestionnairesQuestion, ResponseError> {
    return this.#rawClient.execute<FlexV1InsightsQuestionnairesQuestion, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/Insights/QualityManagement/Questions/{QuestionSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "QuestionSid", value: request.questionSid, schema: s.string() }],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV1InsightsQuestionnairesQuestionApi {
  export type CreateInsightsQuestionnairesQuestionRequest = {
    authorization?: string;
    categorySid: string;
    question: string;
    answerSetId: string;
    allowNa: boolean;
    description?: string;
  };

  export type DeleteInsightsQuestionnairesQuestionRequest = {
    questionSid: string;
    authorization?: string;
  };

  export type ListInsightsQuestionnairesQuestionRequest = {
    categorySid?: string[];
    pageSize?: number;
    page?: number;
    pageToken?: string;
    authorization?: string;
  };

  export type UpdateInsightsQuestionnairesQuestionRequest = {
    questionSid: string;
    authorization?: string;
    allowNa: boolean;
    categorySid?: string;
    question?: string;
    description?: string;
    answerSetId?: string;
  };
}
