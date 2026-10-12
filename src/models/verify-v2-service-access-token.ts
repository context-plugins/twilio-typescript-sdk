import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accessTokenEnumFactorTypesSchema,
  type AccessTokenEnumFactorTypes,
} from "./access-token-enum-factor-types.js";

export type VerifyV2ServiceAccessToken = {
  /** A 34 character string that uniquely identifies this Access Token. */
  sid?: string | null;
  /** The unique SID identifier of the Account. */
  accountSid?: string | null;
  /** The unique SID identifier of the Verify Service. */
  serviceSid?: string | null;
  /** The unique external identifier for the Entity of the Service. */
  entityIdentity?: string | null;
  /** The Type of the Factor. Currently only `push` is supported. */
  factorType?: AccessTokenEnumFactorTypes;
  /**
   * A human readable description of this factor, up to 64 characters. For a push factor, this can
   * be the device's name.
   */
  factorFriendlyName?: string | null;
  /** The access token generated for enrollment, this is an encrypted json web token. */
  token?: string | null;
  /** The URL of this resource. */
  url?: string | null;
  /** How long, in seconds, the access token is valid. Max: 5 minutes @default 0 */
  ttl?: number;
  /**
   * The date that this access token was created, given in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
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
    ttl: s.defaulted(s.int(), 0),
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
