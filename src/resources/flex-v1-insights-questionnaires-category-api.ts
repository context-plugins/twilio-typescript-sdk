import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  flexV1InsightsQuestionnairesCategorySchema,
  type FlexV1InsightsQuestionnairesCategory,
} from "../models/flex-v1-insights-questionnaires-category.js";
import {
  listInsightsQuestionnairesCategoryResponseSchema,
  type ListInsightsQuestionnairesCategoryResponse,
} from "../models/list-insights-questionnaires-category-response.js";
import type { Servers } from "../servers.js";

export class FlexV1InsightsQuestionnairesCategoryApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createInsightsQuestionnairesCategory(
    request: FlexV1InsightsQuestionnairesCategoryApi.CreateInsightsQuestionnairesCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InsightsQuestionnairesCategory, ResponseError> {
    return this.#rawClient.execute<FlexV1InsightsQuestionnairesCategory, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/Insights/QualityManagement/Categories"),
        auth: this.#auth.accountSidAuthToken,
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
        body: { kind: "formUrlEncoded", value: [{ name: "Name", value: request.name, schema: s.string() }] },
      },
      {
        success: { kind: "json", schema: flexV1InsightsQuestionnairesCategorySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteInsightsQuestionnairesCategory(
    request: FlexV1InsightsQuestionnairesCategoryApi.DeleteInsightsQuestionnairesCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default13("/v1/Insights/QualityManagement/Categories/{CategorySid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "CategorySid", value: request.categorySid, schema: s.string() }],
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

  listInsightsQuestionnairesCategory(
    request: FlexV1InsightsQuestionnairesCategoryApi.ListInsightsQuestionnairesCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInsightsQuestionnairesCategoryResponse, ResponseError> {
    return this.#rawClient.execute<ListInsightsQuestionnairesCategoryResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/Insights/QualityManagement/Categories"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInsightsQuestionnairesCategoryResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateInsightsQuestionnairesCategory(
    request: FlexV1InsightsQuestionnairesCategoryApi.UpdateInsightsQuestionnairesCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InsightsQuestionnairesCategory, ResponseError> {
    return this.#rawClient.execute<FlexV1InsightsQuestionnairesCategory, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/Insights/QualityManagement/Categories/{CategorySid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "CategorySid", value: request.categorySid, schema: s.string() }],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
        body: { kind: "formUrlEncoded", value: [{ name: "Name", value: request.name, schema: s.string() }] },
      },
      {
        success: { kind: "json", schema: flexV1InsightsQuestionnairesCategorySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV1InsightsQuestionnairesCategoryApi {
  export type CreateInsightsQuestionnairesCategoryRequest = {
    authorization?: string;
    name: string;
  };

  export type DeleteInsightsQuestionnairesCategoryRequest = {
    categorySid: string;
    authorization?: string;
  };

  export type ListInsightsQuestionnairesCategoryRequest = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
    authorization?: string;
  };

  export type UpdateInsightsQuestionnairesCategoryRequest = {
    categorySid: string;
    authorization?: string;
    name: string;
  };
}
