import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { insightsV1CallSchema, type InsightsV1Call } from "../models/insights-v1-call.js";
import type { Servers } from "../servers.js";

export class InsightsV1CallApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchCall2(
    request: InsightsV1CallApi.FetchCall2Request,
    options?: RequestOptions,
  ): ApiPromise<InsightsV1Call, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default14("/v1/Voice/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsV1CallSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace InsightsV1CallApi {
  export type FetchCall2Request = {
    sid: string;
  };
}
