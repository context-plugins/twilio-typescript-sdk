import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TrusthubV1EndUser = {
  sid?: string | null;
  accountSid?: string | null;
  friendlyName?: string | null;
  type?: string | null;
  attributes?: Record<string, unknown> | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
};

export const trusthubV1EndUserSchema: Schema<TrusthubV1EndUser> = s.object<TrusthubV1EndUser>({
  sid: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  friendlyName: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  attributes: s.optionalNullable(s.record(s.string(), s.unknown())),
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
