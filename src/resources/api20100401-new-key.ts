import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountNewKeySchema,
  type ApiV2010AccountNewKey,
} from "../models/api-v2010-account-new-key.js";
import type { Servers } from "../servers.js";

export class Api20100401NewKey {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * API keys
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createNewKey(
    request: Api20100401NewKey.CreateNewKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountNewKey, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Keys.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountNewKeySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401NewKey {
  export type CreateNewKeyRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will be
     * responsible for the new Key resource.
     */
    accountSid: string;
    /**
     * A descriptive string that you create to describe the resource. It can be up to 64 characters
     * long.
     */
    friendlyName?: string;
  };
}
