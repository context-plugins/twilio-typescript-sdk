import { s, type Schema } from "../core/index.js";
import { accountEnumStatusSchema, type AccountEnumStatus } from "./account-enum-status.js";
import { accountEnumTypeSchema, type AccountEnumType } from "./account-enum-type.js";

export type ApiV2010Account = {
  authToken?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  friendlyName?: string | null;
  ownerAccountSid?: string | null;
  sid?: string | null;
  status?: AccountEnumStatus;
  subresourceUris?: Record<string, unknown> | null;
  type?: AccountEnumType;
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
