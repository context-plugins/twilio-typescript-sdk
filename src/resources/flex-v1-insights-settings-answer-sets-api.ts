import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  fetchInsightsSettingsAnswersets(
    request: FlexV1InsightsSettingsAnswerSetsApi.FetchInsightsSettingsAnswersetsRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InsightsSettingsAnswersets, ResponseError> {
    return this.#rawClient.execute<FlexV1InsightsSettingsAnswersets, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/Insights/QualityManagement/Settings/AnswerSets"),
        auth: this.#auth.accountSidAuthToken,
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1InsightsSettingsAnswersetsSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV1InsightsSettingsAnswerSetsApi {
  export type FetchInsightsSettingsAnswersetsRequest = {
    authorization?: string;
  };
}
