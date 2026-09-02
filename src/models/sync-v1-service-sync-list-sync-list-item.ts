import { s, type Schema } from "../core/index.js";

export type SyncV1ServiceSyncListSyncListItem = {
  index?: number;
  accountSid?: string | null;
  serviceSid?: string | null;
  listSid?: string | null;
  url?: string | null;
  revision?: string | null;
  data?: Record<string, unknown> | null;
  dateExpires?: Date | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  createdBy?: string | null;
};

export const syncV1ServiceSyncListSyncListItemSchema: Schema<SyncV1ServiceSyncListSyncListItem> =
  s.object<SyncV1ServiceSyncListSyncListItem>({
    index: s.optional(s.number()),
    accountSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    listSid: s.optionalNullable(s.string()),
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
      listSid: "list_sid",
      dateExpires: "date_expires",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      createdBy: "created_by",
    },
  });
