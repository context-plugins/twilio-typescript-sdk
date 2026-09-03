import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createValidationRequest(
    request: Api20100401ValidationRequest.CreateValidationRequestRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountValidationRequest, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountValidationRequest, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "PhoneNumber", value: request.phoneNumber, schema: s.string() },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "CallDelay", value: request.callDelay, schema: s.optional(s.number()) },
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401ValidationRequest {
  export type CreateValidationRequestRequest = {
    accountSid: string;
    phoneNumber: string;
    friendlyName?: string;
    callDelay?: number;
    extension?: string;
    statusCallback?: string;
    statusCallbackMethod?: StatusCallbackMethod15;
  };
}
