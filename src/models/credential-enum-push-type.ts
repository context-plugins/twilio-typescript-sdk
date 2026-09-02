import { s, type EnumSchema } from "../core/index.js";

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
