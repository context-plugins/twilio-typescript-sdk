import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  callSummariesEnumAnsweredBySchema,
  type CallSummariesEnumAnsweredBy,
} from "../models/call-summaries-enum-answered-by.js";
import {
  callSummariesEnumProcessingStateRequestSchema,
  type CallSummariesEnumProcessingStateRequest,
} from "../models/call-summaries-enum-processing-state-request.js";
import {
  callSummariesEnumSortBySchema,
  type CallSummariesEnumSortBy,
} from "../models/call-summaries-enum-sort-by.js";
import {
  listCallSummariesResponseSchema,
  type ListCallSummariesResponse,
} from "../models/list-call-summaries-response.js";
import type { Servers } from "../servers.js";

export class InsightsV1CallSummariesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  listCallSummaries(
    request: InsightsV1CallSummariesApi.ListCallSummariesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCallSummariesResponse, ResponseError> {
    return this.#rawClient.execute<ListCallSummariesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default14("/v1/Voice/Summaries"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "From", value: request.from, schema: s.optional(s.string()) },
          { name: "To", value: request.to, schema: s.optional(s.string()) },
          { name: "FromCarrier", value: request.fromCarrier, schema: s.optional(s.string()) },
          { name: "ToCarrier", value: request.toCarrier, schema: s.optional(s.string()) },
          { name: "FromCountryCode", value: request.fromCountryCode, schema: s.optional(s.string()) },
          { name: "ToCountryCode", value: request.toCountryCode, schema: s.optional(s.string()) },
          { name: "VerifiedCaller", value: request.verifiedCaller, schema: s.optional(s.boolean()) },
          { name: "HasTag", value: request.hasTag, schema: s.optional(s.boolean()) },
          { name: "StartTime", value: request.startTime, schema: s.optional(s.string()) },
          { name: "EndTime", value: request.endTime, schema: s.optional(s.string()) },
          { name: "CallType", value: request.callType, schema: s.optional(s.string()) },
          { name: "CallState", value: request.callState, schema: s.optional(s.string()) },
          { name: "Direction", value: request.direction, schema: s.optional(s.string()) },
          {
            name: "ProcessingState",
            value: request.processingState,
            schema: s.optional(s.lazy(() => callSummariesEnumProcessingStateRequestSchema)),
          },
          {
            name: "SortBy",
            value: request.sortBy,
            schema: s.optional(s.lazy(() => callSummariesEnumSortBySchema)),
          },
          { name: "Subaccount", value: request.subaccount, schema: s.optional(s.string()) },
          { name: "AbnormalSession", value: request.abnormalSession, schema: s.optional(s.boolean()) },
          {
            name: "AnsweredBy",
            value: request.answeredBy,
            schema: s.optional(s.lazy(() => callSummariesEnumAnsweredBySchema)),
          },
          {
            name: "AnsweredByAnnotation",
            value: request.answeredByAnnotation,
            schema: s.optional(s.string()),
          },
          {
            name: "ConnectivityIssueAnnotation",
            value: request.connectivityIssueAnnotation,
            schema: s.optional(s.string()),
          },
          {
            name: "QualityIssueAnnotation",
            value: request.qualityIssueAnnotation,
            schema: s.optional(s.string()),
          },
          { name: "SpamAnnotation", value: request.spamAnnotation, schema: s.optional(s.boolean()) },
          { name: "CallScoreAnnotation", value: request.callScoreAnnotation, schema: s.optional(s.string()) },
          { name: "BrandedEnabled", value: request.brandedEnabled, schema: s.optional(s.boolean()) },
          {
            name: "VoiceIntegrityEnabled",
            value: request.voiceIntegrityEnabled,
            schema: s.optional(s.boolean()),
          },
          { name: "BrandedBundleSid", value: request.brandedBundleSid, schema: s.optional(s.string()) },
          { name: "BrandedLogo", value: request.brandedLogo, schema: s.optional(s.boolean()) },
          { name: "BrandedType", value: request.brandedType, schema: s.optional(s.string()) },
          { name: "BrandedUseCase", value: request.brandedUseCase, schema: s.optional(s.string()) },
          { name: "BrandedCallReason", value: request.brandedCallReason, schema: s.optional(s.string()) },
          {
            name: "VoiceIntegrityBundleSid",
            value: request.voiceIntegrityBundleSid,
            schema: s.optional(s.string()),
          },
          {
            name: "VoiceIntegrityUseCase",
            value: request.voiceIntegrityUseCase,
            schema: s.optional(s.string()),
          },
          {
            name: "BusinessProfileIdentity",
            value: request.businessProfileIdentity,
            schema: s.optional(s.string()),
          },
          {
            name: "BusinessProfileIndustry",
            value: request.businessProfileIndustry,
            schema: s.optional(s.string()),
          },
          {
            name: "BusinessProfileBundleSid",
            value: request.businessProfileBundleSid,
            schema: s.optional(s.string()),
          },
          { name: "BusinessProfileType", value: request.businessProfileType, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCallSummariesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace InsightsV1CallSummariesApi {
  export type ListCallSummariesRequest = {
    from?: string;
    to?: string;
    fromCarrier?: string;
    toCarrier?: string;
    fromCountryCode?: string;
    toCountryCode?: string;
    verifiedCaller?: boolean;
    hasTag?: boolean;
    startTime?: string;
    endTime?: string;
    callType?: string;
    callState?: string;
    direction?: string;
    processingState?: CallSummariesEnumProcessingStateRequest;
    sortBy?: CallSummariesEnumSortBy;
    subaccount?: string;
    abnormalSession?: boolean;
    answeredBy?: CallSummariesEnumAnsweredBy;
    answeredByAnnotation?: string;
    connectivityIssueAnnotation?: string;
    qualityIssueAnnotation?: string;
    spamAnnotation?: boolean;
    callScoreAnnotation?: string;
    brandedEnabled?: boolean;
    voiceIntegrityEnabled?: boolean;
    brandedBundleSid?: string;
    brandedLogo?: boolean;
    brandedType?: string;
    brandedUseCase?: string;
    brandedCallReason?: string;
    voiceIntegrityBundleSid?: string;
    voiceIntegrityUseCase?: string;
    businessProfileIdentity?: string;
    businessProfileIndustry?: string;
    businessProfileBundleSid?: string;
    businessProfileType?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
