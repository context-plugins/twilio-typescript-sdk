import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  createNewPasskeysFactorRequestSchema,
  type CreateNewPasskeysFactorRequest,
} from "../models/create-new-passkeys-factor-request.js";
import {
  newFactorEnumFactorTypesSchema,
  type NewFactorEnumFactorTypes,
} from "../models/new-factor-enum-factor-types.js";
import {
  newFactorEnumNotificationPlatformsSchema,
  type NewFactorEnumNotificationPlatforms,
} from "../models/new-factor-enum-notification-platforms.js";
import {
  newFactorEnumTotpAlgorithmsSchema,
  type NewFactorEnumTotpAlgorithms,
} from "../models/new-factor-enum-totp-algorithms.js";
import {
  v2ServicesPasskeysFactorsResponseSchema,
  type V2ServicesPasskeysFactorsResponse,
} from "../models/v2-services-passkeys-factors-response.js";
import {
  verifyV2ServiceEntityNewFactorSchema,
  type VerifyV2ServiceEntityNewFactor,
} from "../models/verify-v2-service-entity-new-factor.js";
import type { Servers } from "../servers.js";

export class VerifyV2NewFactor {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createNewFactor(
    request: VerifyV2NewFactor.CreateNewFactorRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceEntityNewFactor, ResponseError> {
    return this.#rawClient.execute<VerifyV2ServiceEntityNewFactor, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/Entities/{Identity}/Factors"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "FactorType", value: request.factorType, schema: newFactorEnumFactorTypesSchema },
            { name: "Binding.Alg", value: request.bindingAlg, schema: s.optional(s.string()) },
            { name: "Binding.PublicKey", value: request.bindingPublicKey, schema: s.optional(s.string()) },
            { name: "Config.AppId", value: request.configAppId, schema: s.optional(s.string()) },
            {
              name: "Config.NotificationPlatform",
              value: request.configNotificationPlatform,
              schema: s.optional(s.lazy(() => newFactorEnumNotificationPlatformsSchema)),
            },
            {
              name: "Config.NotificationToken",
              value: request.configNotificationToken,
              schema: s.optional(s.string()),
            },
            { name: "Config.SdkVersion", value: request.configSdkVersion, schema: s.optional(s.string()) },
            { name: "Binding.Secret", value: request.bindingSecret, schema: s.optional(s.string()) },
            { name: "Config.TimeStep", value: request.configTimeStep, schema: s.optional(s.number()) },
            { name: "Config.Skew", value: request.configSkew, schema: s.optional(s.number()) },
            { name: "Config.CodeLength", value: request.configCodeLength, schema: s.optional(s.number()) },
            {
              name: "Config.Alg",
              value: request.configAlg,
              schema: s.optional(s.lazy(() => newFactorEnumTotpAlgorithmsSchema)),
            },
            {
              name: "Metadata",
              value: request.metadata,
              schema: s.optional(s.record(s.string(), s.unknown())),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceEntityNewFactorSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createNewFactorPasskey(
    request: VerifyV2NewFactor.CreateNewFactorPasskeyRequest,
    options?: RequestOptions,
  ): ApiPromise<V2ServicesPasskeysFactorsResponse, ResponseError> {
    return this.#rawClient.execute<V2ServicesPasskeysFactorsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/Passkeys/Factors"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createNewPasskeysFactorRequestSchema },
      },
      {
        success: { kind: "json", schema: v2ServicesPasskeysFactorsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VerifyV2NewFactor {
  export type CreateNewFactorRequest = {
    serviceSid: string;
    identity: string;
    friendlyName: string;
    factorType: NewFactorEnumFactorTypes;
    bindingAlg?: string;
    bindingPublicKey?: string;
    configAppId?: string;
    configNotificationPlatform?: NewFactorEnumNotificationPlatforms;
    configNotificationToken?: string;
    configSdkVersion?: string;
    bindingSecret?: string;
    configTimeStep?: number;
    configSkew?: number;
    configCodeLength?: number;
    configAlg?: NewFactorEnumTotpAlgorithms;
    metadata?: Record<string, unknown>;
  };

  export type CreateNewFactorPasskeyRequest = {
    serviceSid: string;
    body: CreateNewPasskeysFactorRequest;
  };
}
