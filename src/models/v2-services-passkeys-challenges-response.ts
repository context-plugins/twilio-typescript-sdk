import { s, type Schema } from "../core/index.js";
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

export type V2ServicesPasskeysChallengesResponse = {
  sid?: string | null;
  accountSid?: string | null;
  serviceSid?: string | null;
  entitySid?: string | null;
  identity?: string | null;
  factorSid?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  dateResponded?: Date | null;
  expirationDate?: Date | null;
  status?: ChallengeEnumChallengeStatuses;
  respondedReason?: ChallengeEnumChallengeReasons;
  details?: Record<string, unknown> | null;
  hiddenDetails?: Record<string, unknown> | null;
  metadata?: Record<string, unknown> | null;
  factorType?: ChallengeEnumFactorTypes;
  url?: string | null;
  links?: Record<string, unknown> | null;
  options?: Record<string, unknown>;
};

export const v2ServicesPasskeysChallengesResponseSchema: Schema<V2ServicesPasskeysChallengesResponse> =
  s.object<V2ServicesPasskeysChallengesResponse>({
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
