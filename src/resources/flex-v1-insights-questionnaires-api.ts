import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * To create a Questionnaire
   *
   * @remarks
   * To create a Questionnaire
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createInsightsQuestionnaires(
    request: FlexV1InsightsQuestionnairesApi.CreateInsightsQuestionnairesRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InsightsQuestionnaires, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/v1/Insights/QualityManagement/Questionnaires"),
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
            { name: "Name", value: request.name, schema: s.string() },
            { name: "Description", value: request.description, schema: s.optional(s.string()) },
            { name: "Active", value: request.active, schema: s.optional(s.boolean()) },
            { name: "QuestionSids", value: request.questionSids, schema: s.optional(s.array(s.string())) },
          ],
        },
      },
      {
        success: { kind: "json", schema: flexV1InsightsQuestionnairesSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * To delete the questionnaire
   *
   * @remarks
   * To delete the questionnaire
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteInsightsQuestionnaires(
    request: FlexV1InsightsQuestionnairesApi.DeleteInsightsQuestionnairesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default13(
          "/v1/Insights/QualityManagement/Questionnaires/{QuestionnaireSid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "QuestionnaireSid", value: request.questionnaireSid, schema: s.string() }],
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
   * To get the Questionnaire Detail
   *
   * @remarks
   * To get the Questionnaire Detail
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchInsightsQuestionnaires(
    request: FlexV1InsightsQuestionnairesApi.FetchInsightsQuestionnairesRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InsightsQuestionnaires, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13(
          "/v1/Insights/QualityManagement/Questionnaires/{QuestionnaireSid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "QuestionnaireSid", value: request.questionnaireSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1InsightsQuestionnairesSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * To get all questionnaires with questions
   *
   * @remarks
   * To get all questionnaires with questions
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listInsightsQuestionnaires(
    request: FlexV1InsightsQuestionnairesApi.ListInsightsQuestionnairesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInsightsQuestionnairesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/v1/Insights/QualityManagement/Questionnaires"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "IncludeInactive", value: request.includeInactive, schema: s.optional(s.boolean()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInsightsQuestionnairesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * To update the questionnaire
   *
   * @remarks
   * To update the questionnaire
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateInsightsQuestionnaires(
    request: FlexV1InsightsQuestionnairesApi.UpdateInsightsQuestionnairesRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InsightsQuestionnaires, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13(
          "/v1/Insights/QualityManagement/Questionnaires/{QuestionnaireSid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "QuestionnaireSid", value: request.questionnaireSid, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
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
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace FlexV1InsightsQuestionnairesApi {
  export type CreateInsightsQuestionnairesRequest = {
    /** The Authorization HTTP request header */
    authorization?: string;
    /** The name of this questionnaire */
    name: string;
    /** The description of this questionnaire */
    description?: string;
    /** The flag to enable or disable questionnaire */
    active?: boolean;
    /** The list of questions sids under a questionnaire */
    questionSids?: string[];
  };

  export type DeleteInsightsQuestionnairesRequest = {
    /** The SID of the questionnaire */
    questionnaireSid: string;
    /** The Authorization HTTP request header */
    authorization?: string;
  };

  export type FetchInsightsQuestionnairesRequest = {
    /** The SID of the questionnaire */
    questionnaireSid: string;
    /** The Authorization HTTP request header */
    authorization?: string;
  };

  export type ListInsightsQuestionnairesRequest = {
    /** Flag indicating whether to include inactive questionnaires or not */
    includeInactive?: boolean;
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

  export type UpdateInsightsQuestionnairesRequest = {
    /** The SID of the questionnaire */
    questionnaireSid: string;
    /** The Authorization HTTP request header */
    authorization?: string;
    /** The flag to enable or disable questionnaire */
    active: boolean;
    /** The name of this questionnaire */
    name?: string;
    /** The description of this questionnaire */
    description?: string;
    /** The list of questions sids under a questionnaire */
    questionSids?: string[];
  };
}
