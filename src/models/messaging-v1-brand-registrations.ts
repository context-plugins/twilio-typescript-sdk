import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  brandRegistrationsEnumBrandFeedbackSchema,
  type BrandRegistrationsEnumBrandFeedback,
} from "./brand-registrations-enum-brand-feedback.js";
import {
  brandRegistrationsEnumIdentityStatusSchema,
  type BrandRegistrationsEnumIdentityStatus,
} from "./brand-registrations-enum-identity-status.js";
import {
  brandRegistrationsEnumStatusSchema,
  type BrandRegistrationsEnumStatus,
} from "./brand-registrations-enum-status.js";

export type MessagingV1BrandRegistrations = {
  /** The unique string to identify Brand Registration. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Brand
   * Registration resource.
   */
  accountSid?: string | null;
  /** A2P Messaging Profile Bundle BundleSid. */
  customerProfileBundleSid?: string | null;
  /** A2P Messaging Profile Bundle BundleSid. */
  a2PProfileBundleSid?: string | null;
  /**
   * The date and time in GMT when the resource was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated?: Date | null;
  /**
   * Type of brand. One of: "STANDARD", "SOLE_PROPRIETOR". SOLE_PROPRIETOR is for the low volume,
   * SOLE_PROPRIETOR campaign use case. There can only be one SOLE_PROPRIETOR campaign created per
   * SOLE_PROPRIETOR brand. STANDARD is for all other campaign use cases. Multiple campaign use
   * cases can be created per STANDARD brand.
   */
  brandType?: string | null;
  /**
   * Brand Registration status. One of "PENDING", "APPROVED", "FAILED", "IN_REVIEW",
   * "DELETION_PENDING", "DELETION_FAILED", "SUSPENDED".
   */
  status?: BrandRegistrationsEnumStatus;
  /** Campaign Registry (TCR) Brand ID. Assigned only after successful brand registration. */
  tcrId?: string | null;
  /**
   * DEPRECATED. A reason why brand registration has failed. Only applicable when status is FAILED.
   */
  failureReason?: string | null;
  /** A list of errors that occurred during the brand registration process. */
  errors?: Record<string, unknown>[] | null;
  /** The absolute URL of the Brand Registration resource. */
  url?: string | null;
  /**
   * The secondary vetting score if it was done. Otherwise, it will be the brand score if it's
   * returned from TCR. It may be null if no score is available.
   */
  brandScore?: number | null;
  /** DEPRECATED. Feedback on how to improve brand score */
  brandFeedback?: BrandRegistrationsEnumBrandFeedback[] | null;
  /**
   * When a brand is registered, TCR will attempt to verify the identity of the brand based on the
   * supplied information.
   */
  identityStatus?: BrandRegistrationsEnumIdentityStatus;
  /** Publicly traded company identified in the Russell 3000 Index */
  russell3000?: boolean | null;
  /** Identified as a government entity */
  governmentEntity?: boolean | null;
  /** Nonprofit organization tax-exempt status per section 501 of the U.S. tax code. */
  taxExemptStatus?: string | null;
  /** A flag to disable automatic secondary vetting for brands which it would otherwise be done. */
  skipAutomaticSecVet?: boolean | null;
  /**
   * A boolean that specifies whether brand should be a mock or not. If true, brand will be
   * registered as a mock brand. Defaults to false if no value is provided.
   */
  mock?: boolean | null;
  links?: Record<string, unknown> | null;
};

export const messagingV1BrandRegistrationsSchema: Schema<MessagingV1BrandRegistrations> =
  s.object<MessagingV1BrandRegistrations>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    customerProfileBundleSid: s.optionalNullable(s.string()),
    a2PProfileBundleSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    brandType: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => brandRegistrationsEnumStatusSchema)),
    tcrId: s.optionalNullable(s.string()),
    failureReason: s.optionalNullable(s.string()),
    errors: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    url: s.optionalNullable(s.string()),
    brandScore: s.optionalNullable(s.int()),
    brandFeedback: s.optionalNullable(s.array(s.lazy(() => brandRegistrationsEnumBrandFeedbackSchema))),
    identityStatus: s.optional(s.lazy(() => brandRegistrationsEnumIdentityStatusSchema)),
    russell3000: s.optionalNullable(s.boolean()),
    governmentEntity: s.optionalNullable(s.boolean()),
    taxExemptStatus: s.optionalNullable(s.string()),
    skipAutomaticSecVet: s.optionalNullable(s.boolean()),
    mock: s.optionalNullable(s.boolean()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      accountSid: "account_sid",
      customerProfileBundleSid: "customer_profile_bundle_sid",
      a2PProfileBundleSid: "a2p_profile_bundle_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      brandType: "brand_type",
      tcrId: "tcr_id",
      failureReason: "failure_reason",
      brandScore: "brand_score",
      brandFeedback: "brand_feedback",
      identityStatus: "identity_status",
      russell3000: "russell_3000",
      governmentEntity: "government_entity",
      taxExemptStatus: "tax_exempt_status",
      skipAutomaticSecVet: "skip_automatic_sec_vet",
    },
  });
