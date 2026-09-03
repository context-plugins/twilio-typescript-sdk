import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  accountsCallsRecordingsSidJson201041408Error1Schema,
  type AccountsCallsRecordingsSidJson201041408Error1,
} from "../models/accounts-calls-recordings-sid-json201041408-error1.js";
import {
  conversationsV2ConfigurationSchema,
  type ConversationsV2Configuration,
} from "../models/conversations-v2-configuration.js";
import {
  conversationsV2OperationAcceptedSchema,
  type ConversationsV2OperationAccepted,
} from "../models/conversations-v2-operation-accepted.js";
import {
  v2ControlPlaneConfigurationsRequestSchema,
  type V2ControlPlaneConfigurationsRequest,
} from "../models/v2-control-plane-configurations-request.js";
import {
  v2ControlPlaneConfigurationsRequest1Schema,
  type V2ControlPlaneConfigurationsRequest1,
} from "../models/v2-control-plane-configurations-request1.js";
import {
  v2ControlPlaneConfigurationsResponseSchema,
  type V2ControlPlaneConfigurationsResponse,
} from "../models/v2-control-plane-configurations-response.js";
import type { Servers } from "../servers.js";

export class ConversationsV2ConfigurationApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createConfiguration(
    request: ConversationsV2ConfigurationApi.CreateConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV2OperationAccepted, ConversationsV2ConfigurationApi.CreateConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default7("/v2/ControlPlane/Configurations"),
        auth: this.#auth.accountSidAuthToken,
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v2ControlPlaneConfigurationsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: conversationsV2OperationAcceptedSchema },
        errorFactory: ConversationsV2ConfigurationApi.CreateConfigurationError,
      },
      options,
    );
  }

  deleteConfiguration(
    request: ConversationsV2ConfigurationApi.DeleteConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV2OperationAccepted, ConversationsV2ConfigurationApi.DeleteConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default7("/v2/ControlPlane/Configurations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV2OperationAcceptedSchema },
        errorFactory: ConversationsV2ConfigurationApi.DeleteConfigurationError,
      },
      options,
    );
  }

  fetchConfiguration2(
    request: ConversationsV2ConfigurationApi.FetchConfiguration2Request,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV2Configuration, ConversationsV2ConfigurationApi.FetchConfiguration2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default7("/v2/ControlPlane/Configurations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV2ConfigurationSchema },
        errorFactory: ConversationsV2ConfigurationApi.FetchConfiguration2Error,
      },
      options,
    );
  }

  listConfiguration(
    request: ConversationsV2ConfigurationApi.ListConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<
    V2ControlPlaneConfigurationsResponse,
    ConversationsV2ConfigurationApi.ListConfigurationError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default7("/v2/ControlPlane/Configurations"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "pageSize", value: request.pageSize, schema: s.defaulted(s.number(), 50) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
          { name: "memoryStoreId", value: request.memoryStoreId, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2ControlPlaneConfigurationsResponseSchema },
        errorFactory: ConversationsV2ConfigurationApi.ListConfigurationError,
      },
      options,
    );
  }

  updateConfiguration2(
    request: ConversationsV2ConfigurationApi.UpdateConfiguration2Request,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV2OperationAccepted, ConversationsV2ConfigurationApi.UpdateConfiguration2Error> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default7("/v2/ControlPlane/Configurations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        headers: [{ name: "Idempotency-Key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => v2ControlPlaneConfigurationsRequest1Schema)),
        },
      },
      {
        success: { kind: "json", schema: conversationsV2OperationAcceptedSchema },
        errorFactory: ConversationsV2ConfigurationApi.UpdateConfiguration2Error,
      },
      options,
    );
  }
}

export namespace ConversationsV2ConfigurationApi {
  export type CreateConfigurationRequest = {
    idempotencyKey?: string;
    body?: V2ControlPlaneConfigurationsRequest;
  };

  export class CreateConfigurationError extends ResponseError<
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
    static readonly errors: ErrorDecoders<CreateConfigurationError> = [
      {
        on: 400,
        kind: "accountsCallsRecordingsSidJson201041408Error1",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 409,
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

  export type DeleteConfigurationRequest = {
    sid: string;
    idempotencyKey?: string;
  };

  export class DeleteConfigurationError extends ResponseError<
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
    static readonly errors: ErrorDecoders<DeleteConfigurationError> = [
      {
        on: 404,
        kind: "accountsCallsRecordingsSidJson201041408Error1",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 409,
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

  export type FetchConfiguration2Request = {
    sid: string;
  };

  export class FetchConfiguration2Error extends ResponseError<
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
  > {
    static readonly errors: ErrorDecoders<FetchConfiguration2Error> = [
      {
        on: 404,
        kind: "accountsCallsRecordingsSidJson201041408Error1",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 429,
        kind: "accountsCallsRecordingsSidJson201041408Error12",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 500,
        kind: "accountsCallsRecordingsSidJson201041408Error13",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 503,
        kind: "accountsCallsRecordingsSidJson201041408Error14",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
    ];
  }

  export type ListConfigurationRequest = {
    pageSize?: number;
    pageToken?: string;
    memoryStoreId?: string;
  };

  export class ListConfigurationError extends ResponseError<
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
    static readonly errors: ErrorDecoders<ListConfigurationError> = [
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

  export type UpdateConfiguration2Request = {
    sid: string;
    idempotencyKey?: string;
    body?: V2ControlPlaneConfigurationsRequest1;
  };

  export class UpdateConfiguration2Error extends ResponseError<
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
    | Declared<
      "accountsCallsRecordingsSidJson201041408Error16",
      AccountsCallsRecordingsSidJson201041408Error1
    >
  > {
    static readonly errors: ErrorDecoders<UpdateConfiguration2Error> = [
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
        on: 409,
        kind: "accountsCallsRecordingsSidJson201041408Error13",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 429,
        kind: "accountsCallsRecordingsSidJson201041408Error14",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 500,
        kind: "accountsCallsRecordingsSidJson201041408Error15",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
      {
        on: 503,
        kind: "accountsCallsRecordingsSidJson201041408Error16",
        decode: { kind: "json", schema: accountsCallsRecordingsSidJson201041408Error1Schema },
      },
    ];
  }
}
