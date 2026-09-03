import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  messagingV1BrandRegistrationsBrandRegistrationOtpSchema,
  type MessagingV1BrandRegistrationsBrandRegistrationOtp,
} from "../models/messaging-v1-brand-registrations-brand-registration-otp.js";
import type { Servers } from "../servers.js";

export class MessagingV1BrandRegistrationOtp {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createBrandRegistrationOtp(
    request: MessagingV1BrandRegistrationOtp.CreateBrandRegistrationOtpRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1BrandRegistrationsBrandRegistrationOtp, ResponseError> {
    return this.#rawClient.execute<MessagingV1BrandRegistrationsBrandRegistrationOtp, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default1("/v1/a2p/BrandRegistrations/{BrandRegistrationSid}/SmsOtp"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "BrandRegistrationSid", value: request.brandRegistrationSid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1BrandRegistrationsBrandRegistrationOtpSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace MessagingV1BrandRegistrationOtp {
  export type CreateBrandRegistrationOtpRequest = {
    brandRegistrationSid: string;
  };
}
