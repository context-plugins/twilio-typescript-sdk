import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Get the Annotation for a specific Call.
   *
   * @remarks
   * Get the Annotation for a specific Call.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchAnnotation(
    request: InsightsV1Annotation.FetchAnnotationRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsV1CallAnnotation, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default14("/v1/Voice/{CallSid}/Annotation"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "CallSid", value: request.callSid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: insightsV1CallAnnotationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an Annotation for a specific Call.
   *
   * @remarks
   * Update an Annotation for a specific Call.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateAnnotation(
    request: InsightsV1Annotation.UpdateAnnotationRequest,
    options?: RequestOptions,
  ): ApiPromise<InsightsV1CallAnnotation, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default14("/v1/Voice/{CallSid}/Annotation"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "CallSid", value: request.callSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
            { name: "CallScore", value: request.callScore, schema: s.optionalNullable(s.int()) },
            { name: "Comment", value: request.comment, schema: s.optional(s.string()) },
            { name: "Incident", value: request.incident, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: insightsV1CallAnnotationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace InsightsV1Annotation {
  export type FetchAnnotationRequest = {
    /** The unique SID identifier of the Call. */
    callSid: string;
  };

  export type UpdateAnnotationRequest = {
    /**
     * The unique string that Twilio created to identify this Call resource. It always starts with a
     * CA.
     */
    callSid: string;
    answeredBy?: AnnotationEnumAnsweredBy;
    connectivityIssue?: AnnotationEnumConnectivityIssue;
    /**
     * Specify if the call had any subjective quality issues. Possible values, one or more of
     * `no_quality_issue`, `low_volume`, `choppy_robotic`, `echo`, `dtmf`, `latency`, `owa`,
     * `static_noise`. Use comma separated values to indicate multiple quality issues for the same
     * call.
     */
    qualityIssues?: string;
    /**
     * A boolean flag to indicate if the call was a spam call. Use this to provide feedback on
     * whether calls placed from your account were marked as spam, or if inbound calls received by
     * your account were unwanted spam. Use `true` if the call was a spam call.
     */
    spam?: boolean;
    /**
     * Specify the call score. This is of type integer. Use a range of 1-5 to indicate the call
     * experience score, with the following mapping as a reference for rating the call [5:
     * Excellent, 4: Good, 3 : Fair, 2 : Poor, 1: Bad].
     */
    callScore?: number | null;
    /**
     * Specify any comments pertaining to the call. `comment` has a maximum character limit of 100.
     * Twilio does not treat this field as PII, so no PII should be included in the `comment`.
     */
    comment?: string;
    /**
     * Associate this call with an incident or support ticket. The `incident` parameter is of type
     * string with a maximum character limit of 100. Twilio does not treat this field as PII, so no
     * PII should be included in `incident`.
     */
    incident?: string;
  };
}
