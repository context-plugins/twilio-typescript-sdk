import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  flexV1InsightsSettingsAnswersetsSchema,
  type FlexV1InsightsSettingsAnswersets,
} from "../models/flex-v1-insights-settings-answersets.js";
import type { Servers } from "../servers.js";

export class FlexV1InsightsSettingsAnswerSetsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * To get the Answer Set Settings for an Account
   *
   * @remarks
   * To get the Answer Set Settings for an Account
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchInsightsSettingsAnswersets(
    request: FlexV1InsightsSettingsAnswerSetsApi.FetchInsightsSettingsAnswersetsRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InsightsSettingsAnswersets, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/v1/Insights/QualityManagement/Settings/AnswerSets"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1InsightsSettingsAnswersetsSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace FlexV1InsightsSettingsAnswerSetsApi {
  export type FetchInsightsSettingsAnswersetsRequest = {
    /** The Authorization HTTP request header */
    authorization?: string;
  };
}
