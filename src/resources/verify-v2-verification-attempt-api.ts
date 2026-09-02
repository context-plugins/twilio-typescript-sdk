import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  fetchVerificationAttempt(
    request: VerifyV2VerificationAttemptApi.FetchVerificationAttemptRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2VerificationAttempt, ResponseError> {
    return this.#rawClient.execute<VerifyV2VerificationAttempt, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default3("/v2/Attempts/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: verifyV2VerificationAttemptSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listVerificationAttempt(
    request: VerifyV2VerificationAttemptApi.ListVerificationAttemptRequest,
    options?: RequestOptions,
  ): ApiPromise<ListVerificationAttemptResponse, ResponseError> {
    return this.#rawClient.execute<ListVerificationAttemptResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default3("/v2/Attempts"),
        auth: this.#auth.accountSidAuthToken,
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
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listVerificationAttemptResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VerifyV2VerificationAttemptApi {
  export type FetchVerificationAttemptRequest = {
    sid: string;
  };

  export type ListVerificationAttemptRequest = {
    dateCreatedAfter?: Date;
    dateCreatedBefore?: Date;
    channelDataTo?: string;
    country?: string;
    channel?: VerificationAttemptEnumChannels;
    verifyServiceSid?: string;
    verificationSid?: string;
    status?: VerificationAttemptEnumConversionStatus;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
