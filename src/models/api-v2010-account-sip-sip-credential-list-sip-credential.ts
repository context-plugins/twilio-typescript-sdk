import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountSipSipCredentialListSipCredential = {
  /** A 34 character string that uniquely identifies this resource. */
  sid?: string | null;
  /** The unique id of the Account that is responsible for this resource. */
  accountSid?: string | null;
  /** The unique id that identifies the credential list that includes this credential. */
  credentialListSid?: string | null;
  /** The username for this credential. */
  username?: string | null;
  /**
   * The date that this resource was created, given as GMT in [RFC
   * 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
   */
  dateCreated?: string | null;
  /**
   * The date that this resource was last updated, given as GMT in [RFC
   * 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
   */
  dateUpdated?: string | null;
  /** The URI for this resource, relative to `https://api.twilio.com` */
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
