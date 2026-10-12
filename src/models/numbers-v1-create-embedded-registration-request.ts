import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV1CreateEmbeddedRegistrationRequest = {
  /** The regulation for this registration. */
  regulationId: string;
  /** The regulation version. */
  regulationVersion: number;
  /** Human-readable name for the registration. */
  friendlyName: string;
  /** Email address for registration status notifications. */
  statusNotificationEmail?: string;
  /** The URL of this resource. */
  statusCallbackUrl?: string | null;
  /** Additional comments about the registration. */
  comments?: string;
  /** Theme ID for the Compliance Embeddable UI. */
  themeSetId?: string;
  /**
   * Registration data organized by section (alphanumericSender, business, useCase,
   * authorizedRepresentative, officer, businessAddress).
   */
  data: Record<string, unknown>;
};

export const numbersV1CreateEmbeddedRegistrationRequestSchema: Schema<NumbersV1CreateEmbeddedRegistrationRequest> =
  s.object<NumbersV1CreateEmbeddedRegistrationRequest>({
    regulationId: s.string(),
    regulationVersion: s.int(),
    friendlyName: s.string(),
    statusNotificationEmail: s.optional(s.string()),
    statusCallbackUrl: s.optionalNullable(s.string()),
    comments: s.optional(s.string()),
    themeSetId: s.optional(s.string()),
    data: s.record(s.string(), s.unknown()),
  });
