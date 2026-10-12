import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountCallUserDefinedMessageSchema,
  type ApiV2010AccountCallUserDefinedMessage,
} from "../models/api-v2010-account-call-user-defined-message.js";
import type { Servers } from "../servers.js";

export class Api20100401UserDefinedMessage {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new User Defined Message for the given Call SID.
   *
   * @remarks
   * Create a new User Defined Message for the given Call SID.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createUserDefinedMessage(
    request: Api20100401UserDefinedMessage.CreateUserDefinedMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCallUserDefinedMessage, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessages.json",
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
            { name: "Content", value: request.content, schema: s.string() },
            { name: "IdempotencyKey", value: request.idempotencyKey, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountCallUserDefinedMessageSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401UserDefinedMessage {
  export type CreateUserDefinedMessageRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created User
     * Defined Message.
     */
    accountSid: string;
    /**
     * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the User Defined
     * Message is associated with.
     */
    callSid: string;
    /** The User Defined Message in the form of URL-encoded JSON string. */
    content: string;
    /**
     * A unique string value to identify API call. This should be a unique string value per API call
     * and can be a randomly generated.
     */
    idempotencyKey?: string;
  };
}
