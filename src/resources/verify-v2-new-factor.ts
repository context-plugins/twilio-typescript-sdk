import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Create a new Factor for the Entity
   *
   * @remarks
   * Create a new Factor for the Entity
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createNewFactor(
    request: VerifyV2NewFactor.CreateNewFactorRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceEntityNewFactor, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/Entities/{Identity}/Factors"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
            { name: "Config.TimeStep", value: request.configTimeStep, schema: s.optional(s.int()) },
            { name: "Config.Skew", value: request.configSkew, schema: s.optional(s.int()) },
            { name: "Config.CodeLength", value: request.configCodeLength, schema: s.optional(s.int()) },
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create a new Passkeys Factor for the Entity
   *
   * @remarks
   * Create a new Passkeys Factor for the Entity
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createNewFactorPasskey(
    request: VerifyV2NewFactor.CreateNewFactorPasskeyRequest,
    options?: RequestOptions,
  ): ApiPromise<V2ServicesPasskeysFactorsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/Passkeys/Factors"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createNewPasskeysFactorRequestSchema },
      },
      {
        success: { kind: "json", schema: v2ServicesPasskeysFactorsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VerifyV2NewFactor {
  export type CreateNewFactorRequest = {
    /** The unique SID identifier of the Service. */
    serviceSid: string;
    /**
     * Customer unique identity for the Entity owner of the Factor. This identifier should be
     * immutable, not PII, length between 8 and 64 characters, and generated by your external
     * system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated
     * alphanumeric characters.
     */
    identity: string;
    /**
     * The friendly name of this Factor. This can be any string up to 64 characters, meant for
     * humans to distinguish between Factors. For `factor_type` `push`, this could be a device name.
     * For `factor_type` `totp`, this value is used as the “account name” in constructing the
     * `binding.uri` property. At the same time, we recommend avoiding providing PII.
     */
    friendlyName: string;
    /** The Type of this Factor. Currently `push` and `totp` are supported. */
    factorType: NewFactorEnumFactorTypes;
    /** The algorithm used when `factor_type` is `push`. Algorithm supported: `ES256` */
    bindingAlg?: string;
    /**
     * The Ecdsa public key in PKIX, ASN.1 DER format encoded in Base64.
     *
     * Required when `factor_type` is `push`
     */
    bindingPublicKey?: string;
    /**
     * The ID that uniquely identifies your app in the Google or Apple store, such as
     * `com.example.myapp`. It can be up to 100 characters long.
     *
     * Required when `factor_type` is `push`.
     */
    configAppId?: string;
    configNotificationPlatform?: NewFactorEnumNotificationPlatforms;
    /**
     * For APN, the device token. For FCM, the registration token. It is used to send the push
     * notifications. Must be between 32 and 255 characters long.
     *
     * Required when `factor_type` is `push`.
     */
    configNotificationToken?: string;
    /**
     * The Verify Push SDK version used to configure the factor
     *
     * Required when `factor_type` is `push`
     */
    configSdkVersion?: string;
    /**
     * The shared secret for TOTP factors encoded in Base32. This can be provided when creating the
     * Factor, otherwise it will be generated.
     *
     * Used when `factor_type` is `totp`
     */
    bindingSecret?: string;
    /**
     * Defines how often, in seconds, are TOTP codes generated. i.e, a new TOTP code is generated
     * every time_step seconds. Must be between 20 and 60 seconds, inclusive. The default value is
     * defined at the service level in the property `totp.time_step`. Defaults to 30 seconds if not
     * configured.
     *
     * Used when `factor_type` is `totp`
     */
    configTimeStep?: number;
    /**
     * The number of time-steps, past and future, that are valid for validation of TOTP codes. Must
     * be between 0 and 2, inclusive. The default value is defined at the service level in the
     * property `totp.skew`. If not configured defaults to 1.
     *
     * Used when `factor_type` is `totp`
     */
    configSkew?: number;
    /**
     * Number of digits for generated TOTP codes. Must be between 3 and 8, inclusive. The default
     * value is defined at the service level in the property `totp.code_length`. If not configured
     * defaults to 6.
     *
     * Used when `factor_type` is `totp`
     */
    configCodeLength?: number;
    configAlg?: NewFactorEnumTotpAlgorithms;
    /**
     * Custom metadata associated with the factor. This is added by the Device/SDK directly to allow
     * for the inclusion of device information. It must be a stringified JSON with only strings
     * values eg. `{"os": "Android"}`. Can be up to 1024 characters in length.
     */
    metadata?: Record<string, unknown>;
  };

  export type CreateNewFactorPasskeyRequest = {
    /** The unique SID identifier of the Service. */
    serviceSid: string;
    body: CreateNewPasskeysFactorRequest;
  };
}
