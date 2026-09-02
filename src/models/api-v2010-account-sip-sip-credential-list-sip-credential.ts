import { s, type Schema } from "../core/index.js";

export type ApiV2010AccountSipSipCredentialListSipCredential = {
  sid?: string | null;
  accountSid?: string | null;
  credentialListSid?: string | null;
  username?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  uri?: string | null;
};

export const apiV2010AccountSipSipCredentialListSipCredentialSchema: Schema<ApiV2010AccountSipSipCredentialListSipCredential> =
  s.object<ApiV2010AccountSipSipCredentialListSipCredential>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    credentialListSid: s.optionalNullable(s.string()),
    username: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    uri: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      credentialListSid: "credential_list_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
