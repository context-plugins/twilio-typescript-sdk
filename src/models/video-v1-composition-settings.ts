import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VideoV1CompositionSettings = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * CompositionSettings resource.
   */
  accountSid?: string | null;
  /** The string that you assigned to describe the resource and that will be shown in the console */
  friendlyName?: string | null;
  /** The SID of the stored Credential resource. */
  awsCredentialsSid?: string | null;
  /**
   * The URL of the AWS S3 bucket where the compositions are stored. We only support DNS-compliant
   * URLs like `https://documentation-example-twilio-bucket/compositions`, where `compositions` is
   * the path in which you want the compositions to be stored. This URL accepts only URI-valid
   * characters, as described in the [RFC 3986](https://tools.ietf.org/html/rfc3986#section-2).
   */
  awsS3Url?: string | null;
  /**
   * Whether all compositions are written to the `aws_s3_url`. When `false`, all compositions are
   * stored in our cloud.
   */
  awsStorageEnabled?: boolean | null;
  /** The SID of the Public Key resource used for encryption. */
  encryptionKeySid?: string | null;
  /** Whether all compositions are stored in an encrypted form. The default is `false`. */
  encryptionEnabled?: boolean | null;
  /** The absolute URL of the resource. */
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
