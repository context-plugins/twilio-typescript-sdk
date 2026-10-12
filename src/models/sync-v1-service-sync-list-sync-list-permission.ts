import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SyncV1ServiceSyncListSyncListPermission = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Sync
   * List Permission resource.
   */
  accountSid?: string | null;
  /**
   * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is
   * associated with.
   */
  serviceSid?: string | null;
  /** The SID of the Sync List to which the Permission applies. */
  listSid?: string | null;
  /**
   * The application-defined string that uniquely identifies the resource's User within the Service
   * to an FPA token.
   */
  identity?: string | null;
  /** Whether the identity can read the Sync List and its Items. */
  read?: boolean | null;
  /** Whether the identity can create, update, and delete Items in the Sync List. */
  write?: boolean | null;
  /** Whether the identity can delete the Sync List. */
  manage?: boolean | null;
  /** The absolute URL of the Sync List Permission resource. */
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
