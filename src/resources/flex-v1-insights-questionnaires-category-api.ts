import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * To create a category for Questions
   *
   * @remarks
   * To create a category for Questions
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createInsightsQuestionnairesCategory(
    request: FlexV1InsightsQuestionnairesCategoryApi.CreateInsightsQuestionnairesCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InsightsQuestionnairesCategory, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/v1/Insights/QualityManagement/Categories"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "formUrlEncoded", value: [{ name: "Name", value: request.name, schema: s.string() }] },
      },
      {
        success: { kind: "json", schema: flexV1InsightsQuestionnairesCategorySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  deleteInsightsQuestionnairesCategory(
    request: FlexV1InsightsQuestionnairesCategoryApi.DeleteInsightsQuestionnairesCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default13("/v1/Insights/QualityManagement/Categories/{CategorySid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "CategorySid", value: request.categorySid, schema: s.string() }],
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
   * To get all the categories
   *
   * @remarks
   * To get all the categories
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listInsightsQuestionnairesCategory(
    request: FlexV1InsightsQuestionnairesCategoryApi.ListInsightsQuestionnairesCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInsightsQuestionnairesCategoryResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/v1/Insights/QualityManagement/Categories"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInsightsQuestionnairesCategoryResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * To update the category for Questions
   *
   * @remarks
   * To update the category for Questions
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateInsightsQuestionnairesCategory(
    request: FlexV1InsightsQuestionnairesCategoryApi.UpdateInsightsQuestionnairesCategoryRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InsightsQuestionnairesCategory, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/v1/Insights/QualityManagement/Categories/{CategorySid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "CategorySid", value: request.categorySid, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "formUrlEncoded", value: [{ name: "Name", value: request.name, schema: s.string() }] },
      },
      {
        success: { kind: "json", schema: flexV1InsightsQuestionnairesCategorySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace FlexV1InsightsQuestionnairesCategoryApi {
  export type CreateInsightsQuestionnairesCategoryRequest = {
    /** The Authorization HTTP request header */
    authorization?: string;
    /** The name of this category. */
    name: string;
  };

  export type DeleteInsightsQuestionnairesCategoryRequest = {
    /** The SID of the category to be deleted */
    categorySid: string;
    /** The Authorization HTTP request header */
    authorization?: string;
  };

  export type ListInsightsQuestionnairesCategoryRequest = {
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

  export type UpdateInsightsQuestionnairesCategoryRequest = {
    /** The SID of the category to be updated */
    categorySid: string;
    /** The Authorization HTTP request header */
    authorization?: string;
    /** The name of this category. */
    name: string;
  };
}
