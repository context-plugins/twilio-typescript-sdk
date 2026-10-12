import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountMessageMedia = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) associated with this
   * Media resource.
   */
  accountSid?: string | null;
  /**
   * The default [MIME type](https://en.wikipedia.org/wiki/Internet_media_type) of the media, for
   * example `image/jpeg`, `image/png`, or `image/gif`.
   */
  contentType?: string | null;
  /**
   * The date and time in GMT when this Media resource was created, specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated?: string | null;
  /**
   * The date and time in GMT when this Media resource was last updated, specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated?: string | null;
  /** The SID of the Message resource that is associated with this Media resource. */
  parentSid?: string | null;
  /** The unique string that identifies this Media resource. */
  sid?: string | null;
  /** The URI of this Media resource, relative to `https://api.twilio.com`. */
  uri?: string | null;
};

export const apiV2010AccountMessageMediaSchema: Schema<ApiV2010AccountMessageMedia> =
  s.object<ApiV2010AccountMessageMedia>({
    accountSid: s.optionalNullable(s.string()),
    contentType: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    parentSid: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    uri: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      contentType: "content_type",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      parentSid: "parent_sid",
    },
  });
