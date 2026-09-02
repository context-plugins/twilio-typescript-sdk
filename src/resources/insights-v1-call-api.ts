import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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
  ): ApiPromise<InsightsV1Call, ResponseError> {
    return this.#rawClient.execute<InsightsV1Call, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default14("/v1/Voice/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsV1CallSchema },
        errorFactory: ResponseError,
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
