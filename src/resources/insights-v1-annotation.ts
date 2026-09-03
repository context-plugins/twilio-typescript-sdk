import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  annotationEnumAnsweredBySchema,
  type AnnotationEnumAnsweredBy,
} from "../models/annotation-enum-answered-by.js";
import {
  annotationEnumConnectivityIssueSchema,
  type AnnotationEnumConnectivityIssue,
} from "../models/annotation-enum-connectivity-issue.js";
import {
  insightsV1CallAnnotationSchema,
  type InsightsV1CallAnnotation,
} from "../models/insights-v1-call-annotation.js";
import type { Servers } from "../servers.js";

export class InsightsV1Annotation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchAnnotation(
    request: InsightsV1Annotation.FetchAnnotationRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsV1CallAnnotation, ResponseError> {
    return this.#rawClient.execute<InsightsV1CallAnnotation, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default14("/v1/Voice/{CallSid}/Annotation"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "CallSid", value: request.callSid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsV1CallAnnotationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateAnnotation(
    request: InsightsV1Annotation.UpdateAnnotationRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsV1CallAnnotation, ResponseError> {
    return this.#rawClient.execute<InsightsV1CallAnnotation, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default14("/v1/Voice/{CallSid}/Annotation"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "CallSid", value: request.callSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "AnsweredBy",
              value: request.answeredBy,
              schema: s.optional(s.lazy(() => annotationEnumAnsweredBySchema)),
            },
            {
              name: "ConnectivityIssue",
              value: request.connectivityIssue,
              schema: s.optional(s.lazy(() => annotationEnumConnectivityIssueSchema)),
            },
            { name: "QualityIssues", value: request.qualityIssues, schema: s.optional(s.string()) },
            { name: "Spam", value: request.spam, schema: s.optional(s.boolean()) },
            { name: "CallScore", value: request.callScore, schema: s.optionalNullable(s.number()) },
            { name: "Comment", value: request.comment, schema: s.optional(s.string()) },
            { name: "Incident", value: request.incident, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: insightsV1CallAnnotationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace InsightsV1Annotation {
  export type FetchAnnotationRequest = {
    callSid: string;
  };

  export type UpdateAnnotationRequest = {
    callSid: string;
    answeredBy?: AnnotationEnumAnsweredBy;
    connectivityIssue?: AnnotationEnumConnectivityIssue;
    qualityIssues?: string;
    spam?: boolean;
    callScore?: number | null;
    comment?: string;
    incident?: string;
  };
}
