import { s, type Schema } from "../core/index.js";
import { credentialEnumPushTypeSchema, type CredentialEnumPushType } from "./credential-enum-push-type.js";

export type ConversationsV1Credential = {
  sid?: string | null;
  accountSid?: string | null;
  friendlyName?: string | null;
  type?: CredentialEnumPushType;
  sandbox?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
};

export const conversationsV1CredentialSchema: Schema<ConversationsV1Credential> =
  s.object<ConversationsV1Credential>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    type: s.optional(s.lazy(() => credentialEnumPushTypeSchema)),
    sandbox: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      friendlyName: "friendly_name",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
