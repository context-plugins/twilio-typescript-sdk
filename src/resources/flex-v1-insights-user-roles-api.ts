import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * This is used by Flex UI and Quality Management to fetch the Flex Insights roles for the user
   *
   * @remarks
   * This is used by Flex UI and Quality Management to fetch the Flex Insights roles for the user
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchInsightsUserRoles(
    request: FlexV1InsightsUserRolesApi.FetchInsightsUserRolesRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1InsightsUserRoles, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/v1/Insights/UserRoles"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1InsightsUserRolesSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace FlexV1InsightsUserRolesApi {
  export type FetchInsightsUserRolesRequest = {
    /** The Authorization HTTP request header */
    authorization?: string;
  };
}
