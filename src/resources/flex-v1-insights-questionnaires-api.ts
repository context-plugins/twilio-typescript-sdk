import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  flexV1InsightsQuestionnairesSchema,
  type FlexV1InsightsQuestionnaires,
} from "../models/flex-v1-insights-questionnaires.js";
import {
  listInsightsQuestionnairesResponseSchema,
  type ListInsightsQuestionnairesResponse,
} from "../models/list-insights-questionnaires-response.js";
import type { Servers } from "../servers.js";

export class FlexV1InsightsQuestionnairesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createInsightsQuestionnaires(
    request: FlexV1InsightsQuestionnairesApi.CreateInsightsQuestionnairesRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InsightsQuestionnaires, ResponseError> {
    return this.#rawClient.execute<FlexV1InsightsQuestionnaires, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/Insights/QualityManagement/Questionnaires"),
        auth: this.#auth.accountSidAuthToken,
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Name", value: request.name, schema: s.string() },
            { name: "Description", value: request.description, schema: s.optional(s.string()) },
            { name: "Active", value: request.active, schema: s.optional(s.boolean()) },
            { name: "QuestionSids", value: request.questionSids, schema: s.optional(s.array(s.string())) },
          ],
        },
      },
      {
        success: { kind: "json", schema: flexV1InsightsQuestionnairesSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteInsightsQuestionnaires(
    request: FlexV1InsightsQuestionnairesApi.DeleteInsightsQuestionnairesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default13("/v1/Insights/QualityManagement/Questionnaires/{QuestionnaireSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "QuestionnaireSid", value: request.questionnaireSid, schema: s.string() }],
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

  fetchInsightsQuestionnaires(
    request: FlexV1InsightsQuestionnairesApi.FetchInsightsQuestionnairesRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InsightsQuestionnaires, ResponseError> {
    return this.#rawClient.execute<FlexV1InsightsQuestionnaires, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/Insights/QualityManagement/Questionnaires/{QuestionnaireSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "QuestionnaireSid", value: request.questionnaireSid, schema: s.string() }],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1InsightsQuestionnairesSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listInsightsQuestionnaires(
    request: FlexV1InsightsQuestionnairesApi.ListInsightsQuestionnairesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInsightsQuestionnairesResponse, ResponseError> {
    return this.#rawClient.execute<ListInsightsQuestionnairesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/Insights/QualityManagement/Questionnaires"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "IncludeInactive", value: request.includeInactive, schema: s.optional(s.boolean()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInsightsQuestionnairesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateInsightsQuestionnaires(
    request: FlexV1InsightsQuestionnairesApi.UpdateInsightsQuestionnairesRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InsightsQuestionnaires, ResponseError> {
    return this.#rawClient.execute<FlexV1InsightsQuestionnaires, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/Insights/QualityManagement/Questionnaires/{QuestionnaireSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "QuestionnaireSid", value: request.questionnaireSid, schema: s.string() }],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Active", value: request.active, schema: s.boolean() },
            { name: "Name", value: request.name, schema: s.optional(s.string()) },
            { name: "Description", value: request.description, schema: s.optional(s.string()) },
            { name: "QuestionSids", value: request.questionSids, schema: s.optional(s.array(s.string())) },
          ],
        },
      },
      {
        success: { kind: "json", schema: flexV1InsightsQuestionnairesSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV1InsightsQuestionnairesApi {
  export type CreateInsightsQuestionnairesRequest = {
    authorization?: string;
    name: string;
    description?: string;
    active?: boolean;
    questionSids?: string[];
  };

  export type DeleteInsightsQuestionnairesRequest = {
    questionnaireSid: string;
    authorization?: string;
  };

  export type FetchInsightsQuestionnairesRequest = {
    questionnaireSid: string;
    authorization?: string;
  };

  export type ListInsightsQuestionnairesRequest = {
    includeInactive?: boolean;
    pageSize?: number;
    page?: number;
    pageToken?: string;
    authorization?: string;
  };

  export type UpdateInsightsQuestionnairesRequest = {
    questionnaireSid: string;
    authorization?: string;
    active: boolean;
    name?: string;
    description?: string;
    questionSids?: string[];
  };
}
