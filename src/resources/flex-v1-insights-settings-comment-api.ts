import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  flexV1InsightsSettingsCommentSchema,
  type FlexV1InsightsSettingsComment,
} from "../models/flex-v1-insights-settings-comment.js";
import type { Servers } from "../servers.js";

export class FlexV1InsightsSettingsCommentApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchInsightsSettingsComment(
    request: FlexV1InsightsSettingsCommentApi.FetchInsightsSettingsCommentRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InsightsSettingsComment, ResponseError> {
    return this.#rawClient.execute<FlexV1InsightsSettingsComment, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/Insights/QualityManagement/Settings/CommentTags"),
        auth: this.#auth.accountSidAuthToken,
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1InsightsSettingsCommentSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV1InsightsSettingsCommentApi {
  export type FetchInsightsSettingsCommentRequest = {
    authorization?: string;
  };
}
