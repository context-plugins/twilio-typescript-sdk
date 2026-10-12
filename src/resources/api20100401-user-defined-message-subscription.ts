import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountCallUserDefinedMessageSubscriptionSchema,
  type ApiV2010AccountCallUserDefinedMessageSubscription,
} from "../models/api-v2010-account-call-user-defined-message-subscription.js";
import { method3Schema, type Method3 } from "../models/method3.js";
import type { Servers } from "../servers.js";

export class Api20100401UserDefinedMessageSubscription {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Subscribe to User Defined Messages for a given Call SID.
   *
   * @remarks
   * Subscribe to User Defined Messages for a given Call SID.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createUserDefinedMessageSubscription(
    request: Api20100401UserDefinedMessageSubscription.CreateUserDefinedMessageSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCallUserDefinedMessageSubscription, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessageSubscriptions.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Callback", value: request.callback, schema: s.string() },
            { name: "IdempotencyKey", value: request.idempotencyKey, schema: s.optional(s.string()) },
            { name: "Method", value: request.method, schema: s.optional(s.lazy(() => method3Schema)) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountCallUserDefinedMessageSubscriptionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a specific User Defined Message Subscription.
   *
   * @remarks
   * Delete a specific User Defined Message Subscription.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteUserDefinedMessageSubscription(
    request: Api20100401UserDefinedMessageSubscription.DeleteUserDefinedMessageSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessageSubscriptions/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401UserDefinedMessageSubscription {
  export type CreateUserDefinedMessageSubscriptionRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that subscribed to the
     * User Defined Messages.
     */
    accountSid: string;
    /**
     * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the User Defined
     * Messages subscription is associated with. This refers to the Call SID that is producing the
     * user defined messages.
     */
    callSid: string;
    /**
     * The URL we should call using the `method` to send user defined events to your application.
     * URLs must contain a valid hostname (underscores are not permitted).
     */
    callback: string;
    /**
     * A unique string value to identify API call. This should be a unique string value per API call
     * and can be a randomly generated.
     */
    idempotencyKey?: string;
    /**
     * The HTTP method Twilio will use when requesting the above `Url`. Either `GET` or `POST`.
     * Default is `POST`.
     */
    method?: Method3;
  };

  export type DeleteUserDefinedMessageSubscriptionRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that subscribed to the
     * User Defined Messages.
     */
    accountSid: string;
    /**
     * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the User Defined
     * Message Subscription is associated with. This refers to the Call SID that is producing the
     * User Defined Messages.
     */
    callSid: string;
    /** The SID that uniquely identifies this User Defined Message Subscription. */
    sid: string;
  };
}
