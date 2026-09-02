import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  apiV2010AccountMessageMediaSchema,
  type ApiV2010AccountMessageMedia,
} from "../models/api-v2010-account-message-media.js";
import type { Servers } from "../servers.js";

export class Api20100401MediaInstance {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteMedia(
    request: Api20100401MediaInstance.DeleteMediaRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "MessageSid", value: request.messageSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchMedia(
    request: Api20100401MediaInstance.FetchMediaRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountMessageMedia, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountMessageMedia, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Messages/{MessageSid}/Media/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "MessageSid", value: request.messageSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountMessageMediaSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401MediaInstance {
  export type DeleteMediaRequest = {
    accountSid: string;
    messageSid: string;
    sid: string;
  };

  export type FetchMediaRequest = {
    accountSid: string;
    messageSid: string;
    sid: string;
  };
}
