import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SyncV1ServiceSyncMap = {
  sid?: string | null;
  uniqueName?: string | null;
  accountSid?: string | null;
  serviceSid?: string | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
  revision?: string | null;
  dateExpires?: Date | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  createdBy?: string | null;
};

export const syncV1ServiceSyncMapSchema: Schema<SyncV1ServiceSyncMap> = s.object<SyncV1ServiceSyncMap>({
  sid: s.optionalNullable(s.string()),
  uniqueName: s.optionalNullable(s.string()),
  accountSid: s.optionalNullable(s.string()),
  serviceSid: s.optionalNullable(s.string()),
  url: s.optionalNullable(s.string()),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  revision: s.optionalNullable(s.string()),
  dateExpires: s.optionalNullable(s.dateTime()),
  dateCreated: s.optionalNullable(s.dateTime()),
  dateUpdated: s.optionalNullable(s.dateTime()),
  createdBy: s.optionalNullable(s.string()),
  _keysMap: {
    uniqueName: "unique_name",
    accountSid: "account_sid",
    serviceSid: "service_sid",
    dateExpires: "date_expires",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
    createdBy: "created_by",
  },
});
