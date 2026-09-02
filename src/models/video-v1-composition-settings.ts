import { s, type Schema } from "../core/index.js";

export type VideoV1CompositionSettings = {
  accountSid?: string | null;
  friendlyName?: string | null;
  awsCredentialsSid?: string | null;
  awsS3Url?: string | null;
  awsStorageEnabled?: boolean | null;
  encryptionKeySid?: string | null;
  encryptionEnabled?: boolean | null;
  url?: string | null;
};

export const videoV1CompositionSettingsSchema: Schema<VideoV1CompositionSettings> =
  s.object<VideoV1CompositionSettings>({
    accountSid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    awsCredentialsSid: s.optionalNullable(s.string()),
    awsS3Url: s.optionalNullable(s.string()),
    awsStorageEnabled: s.optionalNullable(s.boolean()),
    encryptionKeySid: s.optionalNullable(s.string()),
    encryptionEnabled: s.optionalNullable(s.boolean()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      friendlyName: "friendly_name",
      awsCredentialsSid: "aws_credentials_sid",
      awsS3Url: "aws_s3_url",
      awsStorageEnabled: "aws_storage_enabled",
      encryptionKeySid: "encryption_key_sid",
      encryptionEnabled: "encryption_enabled",
    },
  });
