import { s, type Schema } from "../core/index.js";
import { callForwardingInfoSchema, type CallForwardingInfo } from "./call-forwarding-info.js";
import { callerNameInfoSchema, type CallerNameInfo } from "./caller-name-info.js";
import { identityMatchInfoSchema, type IdentityMatchInfo } from "./identity-match-info.js";
import { lineStatusInfoSchema, type LineStatusInfo } from "./line-status-info.js";
import {
  lineTypeIntelligenceInfoSchema,
  type LineTypeIntelligenceInfo,
} from "./line-type-intelligence-info.js";
import { reassignedNumberInfoSchema, type ReassignedNumberInfo } from "./reassigned-number-info.js";
import { simSwapInfoSchema, type SimSwapInfo } from "./sim-swap-info.js";
import { smsPumpingRiskInfoSchema, type SmsPumpingRiskInfo } from "./sms-pumping-risk-info.js";

export type LookupBatchResponse = {
  correlationId?: string;
  twilioErrorCode?: number;
  callingCountryCode?: string;
  countryCode?: string;
  phoneNumber?: string;
  nationalFormat?: string;
  valid?: boolean;
  validationErrors?: string[];
  callerName?: CallerNameInfo;
  simSwap?: SimSwapInfo;
  callForwarding?: CallForwardingInfo;
  lineTypeIntelligence?: LineTypeIntelligenceInfo;
  lineStatus?: LineStatusInfo;
  identityMatch?: IdentityMatchInfo;
  reassignedNumber?: ReassignedNumberInfo;
  smsPumpingRisk?: SmsPumpingRiskInfo;
  phoneNumberQualityScore?: Record<string, unknown> | null;
  preFill?: Record<string, unknown> | null;
};

export const lookupBatchResponseSchema: Schema<LookupBatchResponse> = s.object<LookupBatchResponse>({
  correlationId: s.optional(s.string()),
  twilioErrorCode: s.optional(s.number()),
  callingCountryCode: s.optional(s.string()),
  countryCode: s.optional(s.string()),
  phoneNumber: s.optional(s.string()),
  nationalFormat: s.optional(s.string()),
  valid: s.optional(s.boolean()),
  validationErrors: s.optional(s.array(s.string())),
  callerName: s.optional(s.lazy(() => callerNameInfoSchema)),
  simSwap: s.optional(s.lazy(() => simSwapInfoSchema)),
  callForwarding: s.optional(s.lazy(() => callForwardingInfoSchema)),
  lineTypeIntelligence: s.optional(s.lazy(() => lineTypeIntelligenceInfoSchema)),
  lineStatus: s.optional(s.lazy(() => lineStatusInfoSchema)),
  identityMatch: s.optional(s.lazy(() => identityMatchInfoSchema)),
  reassignedNumber: s.optional(s.lazy(() => reassignedNumberInfoSchema)),
  smsPumpingRisk: s.optional(s.lazy(() => smsPumpingRiskInfoSchema)),
  phoneNumberQualityScore: s.optionalNullable(s.record(s.string(), s.unknown())),
  preFill: s.optionalNullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    correlationId: "correlation_id",
    twilioErrorCode: "twilio_error_code",
    callingCountryCode: "calling_country_code",
    countryCode: "country_code",
    phoneNumber: "phone_number",
    nationalFormat: "national_format",
    validationErrors: "validation_errors",
    callerName: "caller_name",
    simSwap: "sim_swap",
    callForwarding: "call_forwarding",
    lineTypeIntelligence: "line_type_intelligence",
    lineStatus: "line_status",
    identityMatch: "identity_match",
    reassignedNumber: "reassigned_number",
    smsPumpingRisk: "sms_pumping_risk",
    phoneNumberQualityScore: "phone_number_quality_score",
    preFill: "pre_fill",
  },
});
