import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * A Messaging Service resource to retry OTP verification for Sole Proprietor Brand Registrations.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBrandRegistrationOtp(
    request: MessagingV1BrandRegistrationOtp.CreateBrandRegistrationOtpRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1BrandRegistrationsBrandRegistrationOtp, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/v1/a2p/BrandRegistrations/{BrandRegistrationSid}/SmsOtp"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "BrandRegistrationSid", value: request.brandRegistrationSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1BrandRegistrationsBrandRegistrationOtpSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace MessagingV1BrandRegistrationOtp {
  export type CreateBrandRegistrationOtpRequest = {
    /** Brand Registration Sid of Sole Proprietor Brand. */
    brandRegistrationSid: string;
  };
}
