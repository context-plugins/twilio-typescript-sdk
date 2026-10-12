import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  challengeEnumChallengeReasonsSchema,
  type ChallengeEnumChallengeReasons,
} from "./challenge-enum-challenge-reasons.js";
import {
  challengeEnumChallengeStatusesSchema,
  type ChallengeEnumChallengeStatuses,
} from "./challenge-enum-challenge-statuses.js";
import {
  challengeEnumFactorTypesSchema,
  type ChallengeEnumFactorTypes,
} from "./challenge-enum-factor-types.js";

export type V2ServicesPasskeysApproveChallengeResponse = {
  /** A 34 character string that uniquely identifies this Challenge. */
  sid?: string | null;
  /** The unique SID identifier of the Account. */
  accountSid?: string | null;
  /** The unique SID identifier of the Service. */
  serviceSid?: string | null;
  /** The unique SID identifier of the Entity. */
  entitySid?: string | null;
  /** Customer unique identity for the Entity owner of the Challenge. */
  identity?: string | null;
  /** The unique SID identifier of the Factor. */
  factorSid?: string | null;
  /**
   * The date that this Challenge was created, given in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /**
   * The date that this Challenge was updated, given in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated?: Date | null;
  /**
   * The date that this Challenge was responded, given in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateResponded?: Date | null;
  /**
   * The date-time when this Challenge expires, given in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  expirationDate?: Date | null;
  /** The Status of this Challenge. One of `pending`, `expired`, `approved` or `denied`. */
  status?: ChallengeEnumChallengeStatuses;
  /**
   * Reason for the Challenge to be in certain `status`. One of `none`, `not_needed` or
   * `not_requested`.
   */
  respondedReason?: ChallengeEnumChallengeReasons;
  /** Details provided to give context about the Challenge. */
  details?: Record<string, unknown> | null;
  /** Details provided to give context about the Challenge. */
  hiddenDetails?: Record<string, unknown> | null;
  /** Custom metadata associated with the challenge. */
  metadata?: Record<string, unknown> | null;
  /** The Factor Type of this Challenge. Currently `push` and `totp` are supported. */
  factorType?: ChallengeEnumFactorTypes;
  /** The URL of this resource. */
  url?: string | null;
  /** Contains a dictionary of URL links to nested resources of this Challenge. */
  links?: Record<string, unknown> | null;
  /** An object that contains challenge options. Currently only used for `passkeys`. */
  options?: Record<string, unknown>;
};

export const v2ServicesPasskeysApproveChallengeResponseSchema: Schema<V2ServicesPasskeysApproveChallengeResponse> =
  s.object<V2ServicesPasskeysApproveChallengeResponse>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    entitySid: s.optionalNullable(s.string()),
    identity: s.optionalNullable(s.string()),
    factorSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    dateResponded: s.optionalNullable(s.dateTime()),
    expirationDate: s.optionalNullable(s.dateTime()),
    status: s.optional(s.lazy(() => challengeEnumChallengeStatusesSchema)),
    respondedReason: s.optional(s.lazy(() => challengeEnumChallengeReasonsSchema)),
    details: s.optionalNullable(s.record(s.string(), s.unknown())),
    hiddenDetails: s.optionalNullable(s.record(s.string(), s.unknown())),
    metadata: s.optionalNullable(s.record(s.string(), s.unknown())),
    factorType: s.optional(s.lazy(() => challengeEnumFactorTypesSchema)),
    url: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    options: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      accountSid: "account_sid",
      serviceSid: "service_sid",
      entitySid: "entity_sid",
      factorSid: "factor_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      dateResponded: "date_responded",
      expirationDate: "expiration_date",
      respondedReason: "responded_reason",
      hiddenDetails: "hidden_details",
      factorType: "factor_type",
    },
  });
