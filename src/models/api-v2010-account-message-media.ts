import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountMessageMedia = {
  accountSid?: string | null;
  contentType?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  parentSid?: string | null;
  sid?: string | null;
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
