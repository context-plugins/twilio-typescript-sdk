import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
import { validationErrorSchema, type ValidationError } from "./validation-error.js";

export type LookupResponse = {
  /** International dialing prefix of the phone number defined in the E.164 standard. */
  callingCountryCode?: string | null;
  /** The phone number's [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). */
  countryCode?: string | null;
  /**
   * The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which
   * consists of a + followed by the country code and subscriber number.
   */
  phoneNumber?: string | null;
  /**
   * The phone number in [national
   * format](https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers).
   */
  nationalFormat?: string | null;
  /**
   * Boolean which indicates if the phone number is in a valid range that can be freely assigned by
   * a carrier to a user.
   */
  valid?: boolean;
  /**
   * Contains reasons why a phone number is invalid. Possible values: TOO_SHORT, TOO_LONG,
   * INVALID_BUT_POSSIBLE, INVALID_COUNTRY_CODE, INVALID_LENGTH, NOT_A_NUMBER.
   */
  validationErrors?: ValidationError[];
  callerName?: CallerNameInfo;
  simSwap?: SimSwapInfo;
  callForwarding?: CallForwardingInfo;
  lineTypeIntelligence?: LineTypeIntelligenceInfo;
  lineStatus?: LineStatusInfo;
  identityMatch?: IdentityMatchInfo;
  reassignedNumber?: ReassignedNumberInfo;
  smsPumpingRisk?: SmsPumpingRiskInfo;
  /**
   * An object that contains information of a mobile phone number quality score. Quality score will
   * return a risk score about the phone number.
   */
  phoneNumberQualityScore?: Record<string, unknown>;
  /**
   * An object that contains pre fill information. pre_fill will return PII information associated
   * with the phone number like first name, last name, address line, country code, state and postal
   * code.
   */
  preFill?: Record<string, unknown>;
  /** The absolute URL of the resource. */
  url?: string;
};

export const lookupResponseSchema: Schema<LookupResponse> = s.object<LookupResponse>({
  callingCountryCode: s.optionalNullable(s.string()),
  countryCode: s.optionalNullable(s.string()),
  phoneNumber: s.optionalNullable(s.string()),
  nationalFormat: s.optionalNullable(s.string()),
  valid: s.optional(s.boolean()),
  validationErrors: s.optional(s.array(s.lazy(() => validationErrorSchema))),
  callerName: s.optional(s.lazy(() => callerNameInfoSchema)),
  simSwap: s.optional(s.lazy(() => simSwapInfoSchema)),
  callForwarding: s.optional(s.lazy(() => callForwardingInfoSchema)),
  lineTypeIntelligence: s.optional(s.lazy(() => lineTypeIntelligenceInfoSchema)),
  lineStatus: s.optional(s.lazy(() => lineStatusInfoSchema)),
  identityMatch: s.optional(s.lazy(() => identityMatchInfoSchema)),
  reassignedNumber: s.optional(s.lazy(() => reassignedNumberInfoSchema)),
  smsPumpingRisk: s.optional(s.lazy(() => smsPumpingRiskInfoSchema)),
  phoneNumberQualityScore: s.optional(s.record(s.string(), s.unknown())),
  preFill: s.optional(s.record(s.string(), s.unknown())),
  url: s.optional(s.string()),
  _keysMap: {
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
