import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createUserDefinedMessageSubscription(
    request: Api20100401UserDefinedMessageSubscription.CreateUserDefinedMessageSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCallUserDefinedMessageSubscription, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountCallUserDefinedMessageSubscription, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessageSubscriptions.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
        ],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteUserDefinedMessageSubscription(
    request: Api20100401UserDefinedMessageSubscription.DeleteUserDefinedMessageSubscriptionRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessageSubscriptions/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
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
}

export namespace Api20100401UserDefinedMessageSubscription {
  export type CreateUserDefinedMessageSubscriptionRequest = {
    accountSid: string;
    callSid: string;
    callback: string;
    idempotencyKey?: string;
    method?: Method3;
  };

  export type DeleteUserDefinedMessageSubscriptionRequest = {
    accountSid: string;
    callSid: string;
    sid: string;
  };
}
