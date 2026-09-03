import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  fetchVerificationAttemptsSummary(
    request: VerifyV2VerificationAttemptsSummaryApi.FetchVerificationAttemptsSummaryRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2VerificationAttemptsSummary, ResponseError> {
    return this.#rawClient.execute<VerifyV2VerificationAttemptsSummary, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default3("/v2/Attempts/Summary"),
        auth: this.#auth.accountSidAuthToken,
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
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: verifyV2VerificationAttemptsSummarySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VerifyV2VerificationAttemptsSummaryApi {
  export type FetchVerificationAttemptsSummaryRequest = {
    verifyServiceSid?: string;
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    country?: string;
    channel?: VerificationAttemptsSummaryEnumChannels;
    destinationPrefix?: string;
  };
}
