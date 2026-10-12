import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  verificationAttemptsSummaryEnumChannelsSchema,
  type VerificationAttemptsSummaryEnumChannels,
} from "../models/verification-attempts-summary-enum-channels.js";
import {
  verifyV2VerificationAttemptsSummarySchema,
  type VerifyV2VerificationAttemptsSummary,
} from "../models/verify-v2-verification-attempts-summary.js";
import type { Servers } from "../servers.js";

export class VerifyV2VerificationAttemptsSummaryApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a summary of how many attempts were made and how many were converted.
   *
   * @remarks
   * Get a summary of how many attempts were made and how many were converted.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchVerificationAttemptsSummary(
    request: VerifyV2VerificationAttemptsSummaryApi.FetchVerificationAttemptsSummaryRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2VerificationAttemptsSummary, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default3("/v2/Attempts/Summary"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "VerifyServiceSid", value: request.verifyServiceSid, schema: s.optional(s.string()) },
          { name: "DateCreatedAfter", value: request.dateCreatedAfter, schema: s.optional(s.dateTime()) },
          { name: "DateCreatedBefore", value: request.dateCreatedBefore, schema: s.optional(s.dateTime()) },
          { name: "Country", value: request.country, schema: s.optional(s.string()) },
          {
            name: "Channel",
            value: request.channel,
            schema: s.optional(s.lazy(() => verificationAttemptsSummaryEnumChannelsSchema)),
          },
          { name: "DestinationPrefix", value: request.destinationPrefix, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: verifyV2VerificationAttemptsSummarySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VerifyV2VerificationAttemptsSummaryApi {
  export type FetchVerificationAttemptsSummaryRequest = {
    /**
     * Filter used to consider only Verification Attempts of the given verify service on the summary
     * aggregation.
     */
    verifyServiceSid?: string;
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
    /**
     * Filter used to consider only Verification Attempts sent to the specified destination country
     * on the summary aggregation.
     */
    country?: string;
    /**
     * Filter Verification Attempts considered on the summary aggregation by communication channel.
     */
    channel?: VerificationAttemptsSummaryEnumChannels;
    /**
     * Filter the Verification Attempts considered on the summary aggregation by Destination prefix.
     * It is the prefix of a phone number in E.164 format.
     */
    destinationPrefix?: string;
  };
}
