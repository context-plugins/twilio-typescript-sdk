import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createUserDefinedMessage(
    request: Api20100401UserDefinedMessage.CreateUserDefinedMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCallUserDefinedMessage, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountCallUserDefinedMessage, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessages.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
        ],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401UserDefinedMessage {
  export type CreateUserDefinedMessageRequest = {
    accountSid: string;
    callSid: string;
    content: string;
    idempotencyKey?: string;
  };
}
