import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import { messagingV1UsecaseSchema, type MessagingV1Usecase } from "../models/messaging-v1-usecase.js";
import type { Servers } from "../servers.js";

export class MessagingV1UsecaseApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchUsecase(options?: RequestOptions): ApiPromise<MessagingV1Usecase, ResponseError> {
    return this.#rawClient.execute<MessagingV1Usecase, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v1/Services/Usecases"),
        auth: this.#auth.accountSidAuthToken,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1UsecaseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}
