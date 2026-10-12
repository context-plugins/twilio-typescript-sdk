import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountValidationRequestSchema,
  type ApiV2010AccountValidationRequest,
} from "../models/api-v2010-account-validation-request.js";
import {
  statusCallbackMethod15Schema,
  type StatusCallbackMethod15,
} from "../models/status-callback-method15.js";
import type { Servers } from "../servers.js";

export class Api20100401ValidationRequest {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * An OutgoingCallerId resource represents a single verified number that may be used as a caller
   * ID when making outgoing calls via the REST API and within the TwiML `<Dial>` verb.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createValidationRequest(
    request: Api20100401ValidationRequest.CreateValidationRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountValidationRequest, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "PhoneNumber", value: request.phoneNumber, schema: s.string() },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "CallDelay", value: request.callDelay, schema: s.optional(s.int()) },
            { name: "Extension", value: request.extension, schema: s.optional(s.string()) },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            {
              name: "StatusCallbackMethod",
              value: request.statusCallbackMethod,
              schema: s.optional(s.lazy(() => statusCallbackMethod15Schema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountValidationRequestSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401ValidationRequest {
  export type CreateValidationRequestRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for the new
     * caller ID resource.
     */
    accountSid: string;
    /**
     * The phone number to verify in [E.164](https://www.twilio.com/docs/glossary/what-e164) format,
     * which consists of a + followed by the country code and subscriber number.
     */
    phoneNumber: string;
    /**
     * A descriptive string that you create to describe the new caller ID resource. It can be up to
     * 64 characters long. The default value is a formatted version of the phone number.
     */
    friendlyName?: string;
    /**
     * The number of seconds to delay before initiating the verification call. Can be an integer
     * between `0` and `60`, inclusive. The default is `0`.
     */
    callDelay?: number;
    /** The digits to dial after connecting the verification call. */
    extension?: string;
    /**
     * The URL we should call using the `status_callback_method` to send status information about
     * the verification process to your application.
     */
    statusCallback?: string;
    /**
     * The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST`, and the
     * default is `POST`.
     */
    statusCallbackMethod?: StatusCallbackMethod15;
  };
}
