import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  flexV1InsightsSessionSchema,
  type FlexV1InsightsSession,
} from "../models/flex-v1-insights-session.js";
import type { Servers } from "../servers.js";

export class FlexV1InsightsSessionApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createInsightsSession(
    request: FlexV1InsightsSessionApi.CreateInsightsSessionRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InsightsSession, ResponseError> {
    return this.#rawClient.execute<FlexV1InsightsSession, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/Insights/Session"),
        auth: this.#auth.accountSidAuthToken,
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1InsightsSessionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV1InsightsSessionApi {
  export type CreateInsightsSessionRequest = {
    authorization?: string;
  };
}
