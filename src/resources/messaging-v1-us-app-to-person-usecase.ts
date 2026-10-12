import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * Messaging Service Use Case resource. Fetch possible use cases for service. The Use Cases API
   * returns an empty list if there is an issue with the customer's A2P brand registration. This
   * Brand cannot register any campaign use cases. Customers are requested to contact support with
   * their A2P brand information.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchUsAppToPersonUsecase(
    request: MessagingV1UsAppToPersonUsecase.FetchUsAppToPersonUsecaseRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1ServiceUsAppToPersonUsecase, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/v1/Services/{MessagingServiceSid}/Compliance/Usa2p/Usecases"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() }],
        query: [
          {
            name: "BrandRegistrationSid",
            value: request.brandRegistrationSid,
            schema: s.optional(s.string()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1ServiceUsAppToPersonUsecaseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace MessagingV1UsAppToPersonUsecase {
  export type FetchUsAppToPersonUsecaseRequest = {
    /**
     * The SID of the [Messaging
     * Service](https://www.twilio.com/docs/messaging/api/service-resource) to fetch the resource
     * from.
     */
    messagingServiceSid: string;
    /** The unique string to identify the A2P brand. */
    brandRegistrationSid?: string;
  };
}
