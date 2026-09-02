import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, Declared, ErrorDecoders, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  accountsCallsRecordingsSidJson201041408Error1Schema,
  type AccountsCallsRecordingsSidJson201041408Error1,
} from "../models/accounts-calls-recordings-sid-json201041408-error1.js";
import {
  conversationsV2OperationStatusSchema,
  type ConversationsV2OperationStatus,
} from "../models/conversations-v2-operation-status.js";
import type { Servers } from "../servers.js";

export class ConversationsV2Operation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchOperationStatus(
    request: ConversationsV2Operation.FetchOperationStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV2OperationStatus, ConversationsV2Operation.FetchOperationStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default7("/v2/ControlPlane/Operations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV2OperationStatusSchema },
        errorFactory: ConversationsV2Operation.FetchOperationStatusError,
      },
      options,
    );
  }
}

export namespace ConversationsV2Operation {
  export type FetchOperationStatusRequest = {
    sid: string;
  };

  export class FetchOperationStatusError extends ResponseError<
    | Declared<"accountsCallsRecordingsSidJson201041408Error1", AccountsCallsRecordingsSidJson201041408Error1>
    | Declared<
      "accountsCallsRecordingsSidJson201041408Error12",
      AccountsCallsRecordingsSidJson201041408Error1
    >
    | Declared<
      "accountsCallsRecordingsSidJson201041408Error13",
      AccountsCallsRecordingsSidJson201041408Error1
    >
    | Declared<
      "accountsCallsRecordingsSidJson201041408Error14",
      AccountsCallsRecordingsSidJson201041408Error1
    >
    | Declared<
      "accountsCallsRecordingsSidJson201041408Error15",
      AccountsCallsRecordingsSidJson201041408Error1
    >
  > {
    static readonly errors: ErrorDecoders<FetchOperationStatusError> = [
      {
        on: 400,
        kind: "accountsCallsRecordingsSidJson201041408Error1",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 404,
        kind: "accountsCallsRecordingsSidJson201041408Error12",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 429,
        kind: "accountsCallsRecordingsSidJson201041408Error13",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 500,
        kind: "accountsCallsRecordingsSidJson201041408Error14",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 503,
        kind: "accountsCallsRecordingsSidJson201041408Error15",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
    ];
  }
}
