import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  factorEnumTotpAlgorithmsSchema,
  type FactorEnumTotpAlgorithms,
} from "../models/factor-enum-totp-algorithms.js";
import { listFactorResponseSchema, type ListFactorResponse } from "../models/list-factor-response.js";
import {
  verifyV2ServiceEntityFactorSchema,
  type VerifyV2ServiceEntityFactor,
} from "../models/verify-v2-service-entity-factor.js";
import type { Servers } from "../servers.js";

export class VerifyV2Factor {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete a specific Factor.
   *
   * @remarks
   * Delete a specific Factor.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteFactor(
    request: VerifyV2Factor.DeleteFactorRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch a specific Factor.
   *
   * @remarks
   * Fetch a specific Factor.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchFactor(
    request: VerifyV2Factor.FetchFactorRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceEntityFactor, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceEntityFactorSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Factors for an Entity.
   *
   * @remarks
   * Retrieve a list of all Factors for an Entity.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listFactor(
    request: VerifyV2Factor.ListFactorRequest,
    options?: RequestOptions,
  ): ApiPromise<ListFactorResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/Entities/{Identity}/Factors"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listFactorResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a specific Factor. This endpoint can be used to Verify a Factor if passed an
   * `AuthPayload` param.
   *
   * @remarks
   * Update a specific Factor. This endpoint can be used to Verify a Factor if passed an
   * `AuthPayload` param.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateFactor(
    request: VerifyV2Factor.UpdateFactorRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceEntityFactor, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "AuthPayload", value: request.authPayload, schema: s.optional(s.string()) },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            {
              name: "Config.NotificationToken",
              value: request.configNotificationToken,
              schema: s.optional(s.string()),
            },
            { name: "Config.SdkVersion", value: request.configSdkVersion, schema: s.optional(s.string()) },
            { name: "Config.TimeStep", value: request.configTimeStep, schema: s.optional(s.int()) },
            { name: "Config.Skew", value: request.configSkew, schema: s.optional(s.int()) },
            { name: "Config.CodeLength", value: request.configCodeLength, schema: s.optional(s.int()) },
            {
              name: "Config.Alg",
              value: request.configAlg,
              schema: s.optional(s.lazy(() => factorEnumTotpAlgorithmsSchema)),
            },
            {
              name: "Config.NotificationPlatform",
              value: request.configNotificationPlatform,
              schema: s.optional(s.string()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceEntityFactorSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VerifyV2Factor {
  export type DeleteFactorRequest = {
    /** The unique SID identifier of the Service. */
    serviceSid: string;
    /**
     * Customer unique identity for the Entity owner of the Factor. This identifier should be
     * immutable, not PII, length between 8 and 64 characters, and generated by your external
     * system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated
     * alphanumeric characters.
     */
    identity: string;
    /** A 34 character string that uniquely identifies this Factor. */
    sid: string;
  };

  export type FetchFactorRequest = {
    /** The unique SID identifier of the Service. */
    serviceSid: string;
    /**
     * Customer unique identity for the Entity owner of the Factor. This identifier should be
     * immutable, not PII, length between 8 and 64 characters, and generated by your external
     * system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated
     * alphanumeric characters.
     */
    identity: string;
    /** A 34 character string that uniquely identifies this Factor. */
    sid: string;
  };

  export type ListFactorRequest = {
    /** The unique SID identifier of the Service. */
    serviceSid: string;
    /**
     * Customer unique identity for the Entity owner of the Factors. This identifier should be
     * immutable, not PII, length between 8 and 64 characters, and generated by your external
     * system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated
     * alphanumeric characters.
     */
    identity: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateFactorRequest = {
    /** The unique SID identifier of the Service. */
    serviceSid: string;
    /**
     * Customer unique identity for the Entity owner of the Factor. This identifier should be
     * immutable, not PII, length between 8 and 64 characters, and generated by your external
     * system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated
     * alphanumeric characters.
     */
    identity: string;
    /** A 34 character string that uniquely identifies this Factor. */
    sid: string;
    /**
     * The optional payload needed to verify the Factor for the first time. E.g. for a TOTP, the
     * numeric code.
     */
    authPayload?: string;
    /** The new friendly name of this Factor. It can be up to 64 characters. */
    friendlyName?: string;
    /**
     * For APN, the device token. For FCM, the registration token. It is used to send the push
     * notifications. Required when `factor_type` is `push`. If specified, this value must be
     * between 32 and 255 characters long.
     */
    configNotificationToken?: string;
    /** The Verify Push SDK version used to configure the factor */
    configSdkVersion?: string;
    /**
     * Defines how often, in seconds, are TOTP codes generated. i.e, a new TOTP code is generated
     * every time_step seconds. Must be between 20 and 60 seconds, inclusive
     */
    configTimeStep?: number;
    /**
     * The number of time-steps, past and future, that are valid for validation of TOTP codes. Must
     * be between 0 and 2, inclusive
     */
    configSkew?: number;
    /** Number of digits for generated TOTP codes. Must be between 3 and 8, inclusive */
    configCodeLength?: number;
    configAlg?: FactorEnumTotpAlgorithms;
    /**
     * The transport technology used to generate the Notification Token. Can be `apn`, `fcm` or
     * `none`.
     *
     * Required when `factor_type` is `push`.
     */
    configNotificationPlatform?: string;
  };
}
