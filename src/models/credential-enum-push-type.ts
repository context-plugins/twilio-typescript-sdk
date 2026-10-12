import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of push-notification service the credential is for. Can be: `fcm`, `gcm`, or `apn`. */
export const CredentialEnumPushType = {
  Apn: "apn",
  Gcm: "gcm",
  Fcm: "fcm",
} as const;
export type CredentialEnumPushType =
  | (typeof CredentialEnumPushType)[keyof typeof CredentialEnumPushType]
  | (string & {});

export const credentialEnumPushTypeSchema: EnumSchema<CredentialEnumPushType> =
  s.enumOf<CredentialEnumPushType>(CredentialEnumPushType);
