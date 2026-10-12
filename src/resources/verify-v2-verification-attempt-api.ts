import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  listVerificationAttemptResponseSchema,
  type ListVerificationAttemptResponse,
} from "../models/list-verification-attempt-response.js";
import {
  verificationAttemptEnumChannelsSchema,
  type VerificationAttemptEnumChannels,
} from "../models/verification-attempt-enum-channels.js";
import {
  verificationAttemptEnumConversionStatusSchema,
  type VerificationAttemptEnumConversionStatus,
} from "../models/verification-attempt-enum-conversion-status.js";
import {
  verifyV2VerificationAttemptSchema,
  type VerifyV2VerificationAttempt,
} from "../models/verify-v2-verification-attempt.js";
import type { Servers } from "../servers.js";

export class VerifyV2VerificationAttemptApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Fetch a specific verification attempt.
   *
   * @remarks
   * Fetch a specific verification attempt.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchVerificationAttempt(
    request: VerifyV2VerificationAttemptApi.FetchVerificationAttemptRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2VerificationAttempt, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default3("/v2/Attempts/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: verifyV2VerificationAttemptSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List all the verification attempts for a given Account.
   *
   * @remarks
   * List all the verification attempts for a given Account.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listVerificationAttempt(
    request: VerifyV2VerificationAttemptApi.ListVerificationAttemptRequest,
    options?: RequestOptions,
  ): ApiPromise<ListVerificationAttemptResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default3("/v2/Attempts"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "DateCreatedAfter", value: request.dateCreatedAfter, schema: s.optional(s.dateTime()) },
          { name: "DateCreatedBefore", value: request.dateCreatedBefore, schema: s.optional(s.dateTime()) },
          { name: "ChannelData.To", value: request.channelDataTo, schema: s.optional(s.string()) },
          { name: "Country", value: request.country, schema: s.optional(s.string()) },
          {
            name: "Channel",
            value: request.channel,
            schema: s.optional(s.lazy(() => verificationAttemptEnumChannelsSchema)),
          },
          { name: "VerifyServiceSid", value: request.verifyServiceSid, schema: s.optional(s.string()) },
          { name: "VerificationSid", value: request.verificationSid, schema: s.optional(s.string()) },
          {
            name: "Status",
            value: request.status,
            schema: s.optional(s.lazy(() => verificationAttemptEnumConversionStatusSchema)),
          },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listVerificationAttemptResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VerifyV2VerificationAttemptApi {
  export type FetchVerificationAttemptRequest = {
    /** The unique SID identifier of a Verification Attempt */
    sid: string;
  };

  export type ListVerificationAttemptRequest = {
    /**
     * Datetime filter used to consider only Verification Attempts created after this datetime on
     * the summary aggregation. Given as GMT in ISO 8601 formatted datetime string:
     * yyyy-MM-dd'T'HH:mm:ss'Z.
     */
    dateCreatedAfter?: Date;
    /**
     * Datetime filter used to consider only Verification Attempts created before this datetime on
     * the summary aggregation. Given as GMT in ISO 8601 formatted datetime string:
     * yyyy-MM-dd'T'HH:mm:ss'Z.
     */
    dateCreatedBefore?: Date;
    /** Destination of a verification. It is phone number in E.164 format. */
    channelDataTo?: string;
    /** Filter used to query Verification Attempts sent to the specified destination country. */
    country?: string;
    /** Filter used to query Verification Attempts by communication channel. */
    channel?: VerificationAttemptEnumChannels;
    /**
     * Filter used to query Verification Attempts by verify service. Only attempts of the provided
     * SID will be returned.
     */
    verifyServiceSid?: string;
    /**
     * Filter used to return all the Verification Attempts of a single verification. Only attempts
     * of the provided verification SID will be returned.
     */
    verificationSid?: string;
    /**
     * Filter used to query Verification Attempts by conversion status. Valid values are
     * `UNCONVERTED`, for attempts that were not converted, and `CONVERTED`, for attempts that were
     * confirmed.
     */
    status?: VerificationAttemptEnumConversionStatus;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };
}
