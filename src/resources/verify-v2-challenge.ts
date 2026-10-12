import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  challengeEnumChallengeStatusesSchema,
  type ChallengeEnumChallengeStatuses,
} from "../models/challenge-enum-challenge-statuses.js";
import {
  challengeEnumListOrdersSchema,
  type ChallengeEnumListOrders,
} from "../models/challenge-enum-list-orders.js";
import {
  listChallengeResponseSchema,
  type ListChallengeResponse,
} from "../models/list-challenge-response.js";
import {
  verifyV2ServiceEntityChallengeSchema,
  type VerifyV2ServiceEntityChallenge,
} from "../models/verify-v2-service-entity-challenge.js";
import type { Servers } from "../servers.js";

export class VerifyV2Challenge {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new Challenge for the Factor
   *
   * @remarks
   * Create a new Challenge for the Factor
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createChallenge(
    request: VerifyV2Challenge.CreateChallengeRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceEntityChallenge, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges"),
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
            { name: "FactorSid", value: request.factorSid, schema: s.string() },
            { name: "ExpirationDate", value: request.expirationDate, schema: s.optional(s.dateTime()) },
            { name: "Details.Message", value: request.detailsMessage, schema: s.optional(s.string()) },
            {
              name: "Details.Fields",
              value: request.detailsFields,
              schema: s.optional(s.array(s.record(s.string(), s.unknown()))),
            },
            {
              name: "HiddenDetails",
              value: request.hiddenDetails,
              schema: s.optional(s.record(s.string(), s.unknown())),
            },
            { name: "AuthPayload", value: request.authPayload, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceEntityChallengeSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch a specific Challenge.
   *
   * @remarks
   * Fetch a specific Challenge.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchChallenge(
    request: VerifyV2Challenge.FetchChallengeRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceEntityChallenge, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{Sid}"),
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
        success: { kind: "json", schema: verifyV2ServiceEntityChallengeSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Challenges for a Factor.
   *
   * @remarks
   * Retrieve a list of all Challenges for a Factor.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listChallenge(
    request: VerifyV2Challenge.ListChallengeRequest,
    options?: RequestOptions,
  ): ApiPromise<ListChallengeResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Identity", value: request.identity, schema: s.string() },
        ],
        query: [
          { name: "FactorSid", value: request.factorSid, schema: s.optional(s.string()) },
          {
            name: "Status",
            value: request.status,
            schema: s.optional(s.lazy(() => challengeEnumChallengeStatusesSchema)),
          },
          {
            name: "Order",
            value: request.order,
            schema: s.optional(s.lazy(() => challengeEnumListOrdersSchema)),
          },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listChallengeResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Verify a specific Challenge.
   *
   * @remarks
   * Verify a specific Challenge.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateChallenge(
    request: VerifyV2Challenge.UpdateChallengeRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceEntityChallenge, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{Sid}"),
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
            {
              name: "Metadata",
              value: request.metadata,
              schema: s.optional(s.record(s.string(), s.unknown())),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceEntityChallengeSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VerifyV2Challenge {
  export type CreateChallengeRequest = {
    /** The unique SID identifier of the Service. */
    serviceSid: string;
    /**
     * Customer unique identity for the Entity owner of the Challenge. This identifier should be
     * immutable, not PII, length between 8 and 64 characters, and generated by your external
     * system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated
     * alphanumeric characters.
     */
    identity: string;
    /** The unique SID identifier of the Factor. */
    factorSid: string;
    /**
     * The date-time when this Challenge expires, given in [ISO
     * 8601](https://en.wikipedia.org/wiki/ISO_8601) format. The default value is five (5) minutes
     * after Challenge creation. The max value is sixty (60) minutes after creation.
     */
    expirationDate?: Date;
    /**
     * Shown to the user when the push notification arrives. Required when `factor_type` is `push`.
     * Can be up to 256 characters in length
     */
    detailsMessage?: string;
    /**
     * A list of objects that describe the Fields included in the Challenge. Each object contains
     * the label and value of the field, the label can be up to 36 characters in length and the
     * value can be up to 128 characters in length. Used when `factor_type` is `push`. There can be
     * up to 20 details fields.
     */
    detailsFields?: Record<string, unknown>[];
    /**
     * Details provided to give context about the Challenge. Not shown to the end user. It must be a
     * stringified JSON with only strings values eg. `{"ip": "172.168.1.234"}`. Can be up to 1024
     * characters in length
     */
    hiddenDetails?: Record<string, unknown>;
    /**
     * Optional payload used to verify the Challenge upon creation. Only used with a Factor of type
     * `totp` to carry the TOTP code that needs to be verified. For `TOTP` this value must be
     * between 3 and 8 characters long.
     */
    authPayload?: string;
  };

  export type FetchChallengeRequest = {
    /** The unique SID identifier of the Service. */
    serviceSid: string;
    /**
     * Customer unique identity for the Entity owner of the Challenges. This identifier should be
     * immutable, not PII, length between 8 and 64 characters, and generated by your external
     * system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated
     * alphanumeric characters.
     */
    identity: string;
    /** A 34 character string that uniquely identifies this Challenge. */
    sid: string;
  };

  export type ListChallengeRequest = {
    /** The unique SID identifier of the Service. */
    serviceSid: string;
    /**
     * Customer unique identity for the Entity owner of the Challenge. This identifier should be
     * immutable, not PII, length between 8 and 64 characters, and generated by your external
     * system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated
     * alphanumeric characters.
     */
    identity: string;
    /** The unique SID identifier of the Factor. */
    factorSid?: string;
    /**
     * The Status of the Challenges to fetch. One of `pending`, `expired`, `approved` or `denied`.
     */
    status?: ChallengeEnumChallengeStatuses;
    /**
     * The desired sort order of the Challenges list. One of `asc` or `desc` for ascending and
     * descending respectively. Defaults to `asc`.
     */
    order?: ChallengeEnumListOrders;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateChallengeRequest = {
    /** The unique SID identifier of the Service. */
    serviceSid: string;
    /**
     * Customer unique identity for the Entity owner of the Challenge. This identifier should be
     * immutable, not PII, length between 8 and 64 characters, and generated by your external
     * system, such as your user's UUID, GUID, or SID. It can only contain dash (-) separated
     * alphanumeric characters.
     */
    identity: string;
    /** A 34 character string that uniquely identifies this Challenge. */
    sid: string;
    /**
     * The optional payload needed to verify the Challenge. E.g., a TOTP would use the numeric code.
     * For `TOTP` this value must be between 3 and 8 characters long. For `Push` this value can be
     * up to 5456 characters in length
     */
    authPayload?: string;
    /**
     * Custom metadata associated with the challenge. This is added by the Device/SDK directly to
     * allow for the inclusion of device information. It must be a stringified JSON with only
     * strings values eg. `{"os": "Android"}`. Can be up to 1024 characters in length.
     */
    metadata?: Record<string, unknown>;
  };
}
