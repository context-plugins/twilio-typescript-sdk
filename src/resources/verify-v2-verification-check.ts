import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  verifyV2ServiceVerificationCheckSchema,
  type VerifyV2ServiceVerificationCheck,
} from "../models/verify-v2-service-verification-check.js";
import type { Servers } from "../servers.js";

export class VerifyV2VerificationCheck {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * challenge a specific Verification Check.
   *
   * @remarks
   * challenge a specific Verification Check.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createVerificationCheck(
    request: VerifyV2VerificationCheck.CreateVerificationCheckRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceVerificationCheck, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/VerificationCheck"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Code", value: request.code, schema: s.optional(s.string()) },
            { name: "To", value: request.to, schema: s.optional(s.string()) },
            { name: "VerificationSid", value: request.verificationSid, schema: s.optional(s.string()) },
            { name: "Amount", value: request.amount, schema: s.optional(s.string()) },
            { name: "Payee", value: request.payee, schema: s.optional(s.string()) },
            { name: "SnaClientToken", value: request.snaClientToken, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceVerificationCheckSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VerifyV2VerificationCheck {
  export type CreateVerificationCheckRequest = {
    /**
     * The SID of the verification [Service](https://www.twilio.com/docs/verify/api/service) to
     * create the resource under.
     */
    serviceSid: string;
    /** The 4-10 character string being verified. */
    code?: string;
    /**
     * The phone number or [email](https://www.twilio.com/docs/verify/email) to verify. Either this
     * parameter or the `verification_sid` must be specified. Phone numbers must be in [E.164
     * format](https://www.twilio.com/docs/glossary/what-e164).
     */
    to?: string;
    /**
     * A SID that uniquely identifies the Verification Check. Either this parameter or the `to`
     * phone number/[email](https://www.twilio.com/docs/verify/email) must be specified.
     */
    verificationSid?: string;
    /**
     * The amount of the associated PSD2 compliant transaction. Requires the PSD2 Service flag
     * enabled.
     */
    amount?: string;
    /**
     * The payee of the associated PSD2 compliant transaction. Requires the PSD2 Service flag
     * enabled.
     */
    payee?: string;
    /**
     * A sna client token received in sna url invocation response needs to be passed in Verification
     * Check request and should match to get successful response.
     */
    snaClientToken?: string;
  };
}
