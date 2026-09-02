import { s, type Schema } from "../core/index.js";

export type SyncV1ServiceSyncMapSyncMapItem = {
  key?: string | null;
  accountSid?: string | null;
  serviceSid?: string | null;
  mapSid?: string | null;
  url?: string | null;
  revision?: string | null;
  data?: Record<string, unknown> | null;
  dateExpires?: Date | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  createdBy?: string | null;
};

export const syncV1ServiceSyncMapSyncMapItemSchema: Schema<SyncV1ServiceSyncMapSyncMapItem> =
  s.object<SyncV1ServiceSyncMapSyncMapItem>({
    key: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    mapSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    revision: s.optionalNullable(s.string()),
    data: s.optionalNullable(s.record(s.string(), s.unknown())),
    dateExpires: s.optionalNullable(s.dateTime()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    createdBy: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      serviceSid: "service_sid",
      mapSid: "map_sid",
      dateExpires: "date_expires",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      createdBy: "created_by",
    },
  });
