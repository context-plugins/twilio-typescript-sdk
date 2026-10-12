import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountEnumStatusSchema, type AccountEnumStatus } from "./account-enum-status.js";
import { accountEnumTypeSchema, type AccountEnumType } from "./account-enum-type.js";

export type ApiV2010Account = {
  /**
   * The authorization token for this account. This token should be kept a secret, so no sharing.
   */
  authToken?: string | null;
  /** The date that this account was created, in GMT in RFC 2822 format */
  dateCreated?: string | null;
  /** The date that this account was last updated, in GMT in RFC 2822 format. */
  dateUpdated?: string | null;
  /**
   * A human readable description of this account, up to 64 characters long. By default the
   * FriendlyName is your email address.
   */
  friendlyName?: string | null;
  /**
   * The unique 34 character id that represents the parent of this account. The OwnerAccountSid of a
   * parent account is it's own sid.
   */
  ownerAccountSid?: string | null;
  /** A 34 character string that uniquely identifies this resource. */
  sid?: string | null;
  /** The status of this account. Usually `active`, but can be `suspended` or `closed`. */
  status?: AccountEnumStatus;
  /** A Map of various subresources available for the given Account Instance */
  subresourceUris?: Record<string, unknown> | null;
  /** The type of this account. Either `Trial` or `Full` if it's been upgraded */
  type?: AccountEnumType;
  /** The URI for this resource, relative to `https://api.twilio.com` */
  uri?: string | null;
};

export const apiV2010AccountSchema: Schema<ApiV2010Account> = s.object<ApiV2010Account>({
  authToken: s.optionalNullable(s.string()),
  dateCreated: s.optionalNullable(s.string()),
  dateUpdated: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  ownerAccountSid: s.optionalNullable(s.string()),
  sid: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => accountEnumStatusSchema)),
  subresourceUris: s.optionalNullable(s.record(s.string(), s.unknown())),
  type: s.optional(s.lazy(() => accountEnumTypeSchema)),
  uri: s.optionalNullable(s.string()),
  _keysMap: {
    authToken: "auth_token",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
    friendlyName: "friendly_name",
    ownerAccountSid: "owner_account_sid",
    subresourceUris: "subresource_uris",
  },
});
