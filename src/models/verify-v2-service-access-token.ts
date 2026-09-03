import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accessTokenEnumFactorTypesSchema,
  type AccessTokenEnumFactorTypes,
} from "./access-token-enum-factor-types.js";

export type VerifyV2ServiceAccessToken = {
  sid?: string | null;
  accountSid?: string | null;
  serviceSid?: string | null;
  entityIdentity?: string | null;
  factorType?: AccessTokenEnumFactorTypes;
  factorFriendlyName?: string | null;
  token?: string | null;
  url?: string | null;
  ttl?: number;
  dateCreated?: Date | null;
};

export const verifyV2ServiceAccessTokenSchema: Schema<VerifyV2ServiceAccessToken> =
  s.object<VerifyV2ServiceAccessToken>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    entityIdentity: s.optionalNullable(s.string()),
    factorType: s.optional(s.lazy(() => accessTokenEnumFactorTypesSchema)),
    factorFriendlyName: s.optionalNullable(s.string()),
    token: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    ttl: s.optional(s.number()),
    dateCreated: s.optionalNullable(s.dateTime()),
    _keysMap: {
      accountSid: "account_sid",
      serviceSid: "service_sid",
      entityIdentity: "entity_identity",
      factorType: "factor_type",
      factorFriendlyName: "factor_friendly_name",
      dateCreated: "date_created",
    },
  });
