import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { credentialEnumPushTypeSchema, type CredentialEnumPushType } from "./credential-enum-push-type.js";

export type ConversationsV1Credential = {
  /** A 34 character string that uniquely identifies this resource. */
  sid?: string | null;
  /**
   * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for
   * this credential.
   */
  accountSid?: string | null;
  /** The human-readable name of this credential, limited to 64 characters. Optional. */
  friendlyName?: string | null;
  /**
   * The type of push-notification service the credential is for. Can be: `fcm`, `gcm`, or `apn`.
   */
  type?: CredentialEnumPushType;
  /**
   * [APN only] Whether to send the credential to sandbox APNs. Can be `true` to send to sandbox
   * APNs or `false` to send to production.
   */
  sandbox?: string | null;
  /** The date that this resource was created. */
  dateCreated?: Date | null;
  /** The date that this resource was last updated. */
  dateUpdated?: Date | null;
  /** An absolute API resource URL for this credential. */
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
