import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SyncV1ServiceSyncMapSyncMapPermission = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Sync Map
   * Permission resource.
   */
  accountSid?: string | null;
  /**
   * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is
   * associated with.
   */
  serviceSid?: string | null;
  /** The SID of the Sync Map to which the Permission applies. */
  mapSid?: string | null;
  /**
   * The application-defined string that uniquely identifies the resource's User within the Service
   * to an FPA token.
   */
  identity?: string | null;
  /** Whether the identity can read the Sync Map and its Items. */
  read?: boolean | null;
  /** Whether the identity can create, update, and delete Items in the Sync Map. */
  write?: boolean | null;
  /** Whether the identity can delete the Sync Map. */
  manage?: boolean | null;
  /** The absolute URL of the Sync Map Permission resource. */
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
