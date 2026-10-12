import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  factorEnumFactorStatusesSchema,
  type FactorEnumFactorStatuses,
} from "./factor-enum-factor-statuses.js";
import { factorEnumFactorTypesSchema, type FactorEnumFactorTypes } from "./factor-enum-factor-types.js";

export type V2ServicesPasskeysVerifyFactorResponse = {
  /** A 34 character string that uniquely identifies this Factor. */
  sid?: string | null;
  /** The unique SID identifier of the Account. */
  accountSid?: string | null;
  /** The unique SID identifier of the Service. */
  serviceSid?: string | null;
  /** The unique SID identifier of the Entity. */
  entitySid?: string | null;
  /** Customer unique identity for the Entity owner of the Factor. */
  identity?: string | null;
  /**
   * The date that this Factor was created, given in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /**
   * The date that this Factor was updated, given in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated?: Date | null;
  /** A human readable description of this resource, up to 64 characters. */
  friendlyName?: string | null;
  /** The Status of this Factor. One of `unverified` or `verified`. */
  status?: FactorEnumFactorStatuses;
  /** The Type of this Factor. Currently `push` and `totp` are supported. */
  factorType?: FactorEnumFactorTypes;
  /** An object that contains configurations specific to a `factor_type`. */
  config?: Record<string, unknown> | null;
  /** Custom metadata associated with the factor. */
  metadata?: Record<string, unknown> | null;
  /** The URL of this resource. */
  url?: string | null;
};

export const v2ServicesPasskeysVerifyFactorResponseSchema: Schema<V2ServicesPasskeysVerifyFactorResponse> =
  s.object<V2ServicesPasskeysVerifyFactorResponse>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    entitySid: s.optionalNullable(s.string()),
    identity: s.optionalNullable(s.string()),
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
