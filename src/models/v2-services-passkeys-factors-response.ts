import { s, type Schema } from "../core/index.js";
import {
  factorEnumFactorStatusesSchema,
  type FactorEnumFactorStatuses,
} from "./factor-enum-factor-statuses.js";
import { factorEnumFactorTypesSchema, type FactorEnumFactorTypes } from "./factor-enum-factor-types.js";

export type V2ServicesPasskeysFactorsResponse = {
  sid?: string | null;
  accountSid?: string | null;
  serviceSid?: string | null;
  entitySid?: string | null;
  identity?: string | null;
  binding?: Record<string, unknown> | null;
  options?: Record<string, unknown> | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  friendlyName?: string | null;
  status?: FactorEnumFactorStatuses;
  factorType?: FactorEnumFactorTypes;
  config?: Record<string, unknown> | null;
  metadata?: Record<string, unknown> | null;
  url?: string | null;
};

export const v2ServicesPasskeysFactorsResponseSchema: Schema<V2ServicesPasskeysFactorsResponse> =
  s.object<V2ServicesPasskeysFactorsResponse>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    entitySid: s.optionalNullable(s.string()),
    identity: s.optionalNullable(s.string()),
    binding: s.optionalNullable(s.record(s.string(), s.unknown())),
    options: s.optionalNullable(s.record(s.string(), s.unknown())),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    friendlyName: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => factorEnumFactorStatusesSchema)),
    factorType: s.optional(s.lazy(() => factorEnumFactorTypesSchema)),
    config: s.optionalNullable(s.record(s.string(), s.unknown())),
    metadata: s.optionalNullable(s.record(s.string(), s.unknown())),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      serviceSid: "service_sid",
      entitySid: "entity_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      friendlyName: "friendly_name",
      factorType: "factor_type",
    },
  });
