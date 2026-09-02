import { s, type Schema } from "../core/index.js";

export type SyncV1ServiceSyncListSyncListPermission = {
  accountSid?: string | null;
  serviceSid?: string | null;
  listSid?: string | null;
  identity?: string | null;
  read?: boolean | null;
  write?: boolean | null;
  manage?: boolean | null;
  url?: string | null;
};

export const syncV1ServiceSyncListSyncListPermissionSchema: Schema<SyncV1ServiceSyncListSyncListPermission> =
  s.object<SyncV1ServiceSyncListSyncListPermission>({
    accountSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    listSid: s.optionalNullable(s.string()),
    identity: s.optionalNullable(s.string()),
    read: s.optionalNullable(s.boolean()),
    write: s.optionalNullable(s.boolean()),
    manage: s.optionalNullable(s.boolean()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      serviceSid: "service_sid",
      listSid: "list_sid",
    },
  });
