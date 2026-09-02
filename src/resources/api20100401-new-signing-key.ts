import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  apiV2010AccountNewSigningKeySchema,
  type ApiV2010AccountNewSigningKey,
} from "../models/api-v2010-account-new-signing-key.js";
import type { Servers } from "../servers.js";

export class Api20100401NewSigningKey {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createNewSigningKey(
    request: Api20100401NewSigningKey.CreateNewSigningKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountNewSigningKey, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountNewSigningKey, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/SigningKeys.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountNewSigningKeySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401NewSigningKey {
  export type CreateNewSigningKeyRequest = {
    accountSid: string;
    friendlyName?: string;
  };
}
