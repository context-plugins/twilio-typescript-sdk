import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  flexV1InsightsUserRolesSchema,
  type FlexV1InsightsUserRoles,
} from "../models/flex-v1-insights-user-roles.js";
import type { Servers } from "../servers.js";

export class FlexV1InsightsUserRolesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchInsightsUserRoles(
    request: FlexV1InsightsUserRolesApi.FetchInsightsUserRolesRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InsightsUserRoles, ResponseError> {
    return this.#rawClient.execute<FlexV1InsightsUserRoles, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/Insights/UserRoles"),
        auth: this.#auth.accountSidAuthToken,
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1InsightsUserRolesSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV1InsightsUserRolesApi {
  export type FetchInsightsUserRolesRequest = {
    authorization?: string;
  };
}
