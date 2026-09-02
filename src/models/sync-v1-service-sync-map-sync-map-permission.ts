import { s, type Schema } from "../core/index.js";

export type SyncV1ServiceSyncMapSyncMapPermission = {
  accountSid?: string | null;
  serviceSid?: string | null;
  mapSid?: string | null;
  identity?: string | null;
  read?: boolean | null;
  write?: boolean | null;
  manage?: boolean | null;
  url?: string | null;
};

export const syncV1ServiceSyncMapSyncMapPermissionSchema: Schema<SyncV1ServiceSyncMapSyncMapPermission> =
  s.object<SyncV1ServiceSyncMapSyncMapPermission>({
    accountSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    mapSid: s.optionalNullable(s.string()),
    identity: s.optionalNullable(s.string()),
    read: s.optionalNullable(s.boolean()),
    write: s.optionalNullable(s.boolean()),
    manage: s.optionalNullable(s.boolean()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      serviceSid: "service_sid",
      mapSid: "map_sid",
    },
  });
