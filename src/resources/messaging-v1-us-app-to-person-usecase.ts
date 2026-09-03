import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  messagingV1ServiceUsAppToPersonUsecaseSchema,
  type MessagingV1ServiceUsAppToPersonUsecase,
} from "../models/messaging-v1-service-us-app-to-person-usecase.js";
import type { Servers } from "../servers.js";

export class MessagingV1UsAppToPersonUsecase {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchUsAppToPersonUsecase(
    request: MessagingV1UsAppToPersonUsecase.FetchUsAppToPersonUsecaseRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1ServiceUsAppToPersonUsecase, ResponseError> {
    return this.#rawClient.execute<MessagingV1ServiceUsAppToPersonUsecase, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v1/Services/{MessagingServiceSid}/Compliance/Usa2p/Usecases"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() }],
        query: [
          {
            name: "BrandRegistrationSid",
            value: request.brandRegistrationSid,
            schema: s.optional(s.string()),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1ServiceUsAppToPersonUsecaseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace MessagingV1UsAppToPersonUsecase {
  export type FetchUsAppToPersonUsecaseRequest = {
    messagingServiceSid: string;
    brandRegistrationSid?: string;
  };
}
