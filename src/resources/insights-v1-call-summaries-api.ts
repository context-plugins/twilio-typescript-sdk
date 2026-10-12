import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * Get a list of Call Summaries.
   *
   * @remarks
   * Get a list of Call Summaries.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCallSummaries(
    request: InsightsV1CallSummariesApi.ListCallSummariesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCallSummariesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default14("/v1/Voice/Summaries"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
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
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCallSummariesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace InsightsV1CallSummariesApi {
  export type ListCallSummariesRequest = {
    /** A calling party. Could be an E.164 number, a SIP URI, or a Twilio Client registered name. */
    from?: string;
    /** A called party. Could be an E.164 number, a SIP URI, or a Twilio Client registered name. */
    to?: string;
    /** An origination carrier. */
    fromCarrier?: string;
    /** A destination carrier. */
    toCarrier?: string;
    /** A source country code based on phone number in From. */
    fromCountryCode?: string;
    /** A destination country code. Based on phone number in To. */
    toCountryCode?: string;
    /**
     * A boolean flag indicating whether or not the caller was verified using SHAKEN/STIR.One of
     * 'true' or 'false'.
     */
    verifiedCaller?: boolean;
    /**
     * A boolean flag indicating the presence of one or more [Voice Insights Call
     * Tags](https://www.twilio.com/docs/voice/voice-insights/api/call/details-call-tags).
     */
    hasTag?: boolean;
    /**
     * A Start time of the calls. xm (x minutes), xh (x hours), xd (x days), 1w, 30m, 3d, 4w or
     * datetime-ISO. Defaults to 4h.
     */
    startTime?: string;
    /**
     * An End Time of the calls. xm (x minutes), xh (x hours), xd (x days), 1w, 30m, 3d, 4w or
     * datetime-ISO. Defaults to 0m.
     */
    endTime?: string;
    /** A Call Type of the calls. One of `carrier`, `sip`, `trunking` or `client`. */
    callType?: string;
    /**
     * A Call State of the calls. One of `ringing`, `completed`, `busy`, `fail`, `noanswer`,
     * `canceled`, `answered`, `undialed`.
     */
    callState?: string;
    /**
     * A Direction of the calls. One of `outbound_api`, `outbound_dial`, `inbound`,
     * `trunking_originating`, `trunking_terminating`.
     */
    direction?: string;
    /** A Processing State of the Call Summaries. One of `completed`, `partial` or `all`. */
    processingState?: CallSummariesEnumProcessingStateRequest;
    /**
     * A Sort By criterion for the returned list of Call Summaries. One of `start_time` or
     * `end_time`.
     */
    sortBy?: CallSummariesEnumSortBy;
    /** A unique SID identifier of a Subaccount. */
    subaccount?: string;
    /** A boolean flag indicating an abnormal session where the last SIP response was not 200 OK. */
    abnormalSession?: boolean;
    /**
     * An Answered By value for the calls based on `Answering Machine Detection (AMD)`. One of
     * `unknown`, `machine_start`, `machine_end_beep`, `machine_end_silence`, `machine_end_other`,
     * `human` or `fax`.
     */
    answeredBy?: CallSummariesEnumAnsweredBy;
    /** Either machine or human. */
    answeredByAnnotation?: string;
    /**
     * A Connectivity Issue with the calls. One of `no_connectivity_issue`, `invalid_number`,
     * `caller_id`, `dropped_call`, or `number_reachability`.
     */
    connectivityIssueAnnotation?: string;
    /**
     * A subjective Quality Issue with the calls. One of `no_quality_issue`, `low_volume`,
     * `choppy_robotic`, `echo`, `dtmf`, `latency`, `owa`, `static_noise`.
     */
    qualityIssueAnnotation?: string;
    /** A boolean flag indicating spam calls. */
    spamAnnotation?: boolean;
    /**
     * A Call Score of the calls. Use a range of 1-5 to indicate the call experience score, with the
     * following mapping as a reference for the rated call [5: Excellent, 4: Good, 3 : Fair, 2 :
     * Poor, 1: Bad].
     */
    callScoreAnnotation?: string;
    /**
     * A boolean flag indicating whether or not the calls were branded using Twilio Branded Calls.
     * One of 'true' or 'false'
     */
    brandedEnabled?: boolean;
    /**
     * A boolean flag indicating whether or not the phone number had voice integrity enabled.One of
     * 'true' or 'false'
     */
    voiceIntegrityEnabled?: boolean;
    /** A unique SID identifier of the Branded Call. */
    brandedBundleSid?: string;
    /**
     * Indicates whether the branded logo was displayed during the in_brand branded call. Possible
     * values are true (logo was present) or false (logo was not present).
     */
    brandedLogo?: boolean;
    /** Indicates whether the Branded Call is in_band vs out_of_band. */
    brandedType?: string;
    /**
     * Specifies the user-defined purpose for the call, as provided during the setup of in_band
     * branded calling.
     */
    brandedUseCase?: string;
    /**
     * Specifies the user-defined reason for the call, which will be displayed to the end user on
     * their mobile device during an in_band branded call.
     */
    brandedCallReason?: string;
    /** A unique SID identifier of the Voice Integrity Profile. */
    voiceIntegrityBundleSid?: string;
    /**
     * A Voice Integrity Use Case . Is of type enum. One of 'abandoned_cart',
     * 'appointment_reminders', 'appointment_scheduling', 'asset_management', 'automated_support',
     * 'call_tracking', 'click_to_call', 'contact_tracing', 'contactless_delivery',
     * 'customer_support', 'dating/social', 'delivery_notifications', 'distance_learning',
     * 'emergency_notifications', 'employee_notifications', 'exam_proctoring',
     * 'field_notifications', 'first_responder', 'fraud_alerts', 'group_messaging',
     * 'identify_&_verification', 'intelligent_routing', 'lead_alerts', 'lead_distribution',
     * 'lead_generation', 'lead_management', 'lead_nurturing', 'marketing_events', 'mass_alerts',
     * 'meetings/collaboration', 'order_notifications', 'outbound_dialer', 'pharmacy',
     * 'phone_system', 'purchase_confirmation', 'remote_appointments', 'rewards_program',
     * 'self-service', 'service_alerts', 'shift_management', 'survey/research', 'telehealth',
     * 'telemarketing', 'therapy_(individual+group)'.
     */
    voiceIntegrityUseCase?: string;
    /**
     * A Business Identity of the calls. Is of type enum. One of 'direct_customer',
     * 'isv_reseller_or_partner'.
     */
    businessProfileIdentity?: string;
    /**
     * A Business Industry of the calls. Is of type enum. One of 'automotive', 'agriculture',
     * 'banking', 'consumer', 'construction', 'education', 'engineering', 'energy', 'oil_and_gas',
     * 'fast_moving_consumer_goods', 'financial', 'fintech', 'food_and_beverage', 'government',
     * 'healthcare', 'hospitality', 'insurance', 'legal', 'manufacturing', 'media', 'online',
     * 'professional_services', 'raw_materials', 'real_estate', 'religion', 'retail', 'jewelry',
     * 'technology', 'telecommunications', 'transportation', 'travel', 'electronics',
     * 'not_for_profit'
     */
    businessProfileIndustry?: string;
    /** A unique SID identifier of the Business Profile. */
    businessProfileBundleSid?: string;
    /** A Business Profile Type of the calls. Is of type enum. One of 'primary', 'secondary'. */
    businessProfileType?: string;
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
