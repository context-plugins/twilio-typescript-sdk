import { s, type Schema } from "../core/index.js";
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
  sid?: string | null;
  accountSid?: string | null;
  customerProfileBundleSid?: string | null;
  a2PProfileBundleSid?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  brandType?: string | null;
  status?: BrandRegistrationsEnumStatus;
  tcrId?: string | null;
  failureReason?: string | null;
  errors?: Record<string, unknown>[] | null;
  url?: string | null;
  brandScore?: number | null;
  brandFeedback?: BrandRegistrationsEnumBrandFeedback[] | null;
  identityStatus?: BrandRegistrationsEnumIdentityStatus;
  russell3000?: boolean | null;
  governmentEntity?: boolean | null;
  taxExemptStatus?: string | null;
  skipAutomaticSecVet?: boolean | null;
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
    brandScore: s.optionalNullable(s.number()),
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
