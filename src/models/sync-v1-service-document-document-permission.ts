import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SyncV1ServiceDocumentDocumentPermission = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Document
   * Permission resource.
   */
  accountSid?: string | null;
  /**
   * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) the resource is
   * associated with.
   */
  serviceSid?: string | null;
  /** The SID of the Sync Document to which the Document Permission applies. */
  documentSid?: string | null;
  /**
   * The application-defined string that uniquely identifies the resource's User within the Service
   * to an FPA token.
   */
  identity?: string | null;
  /** Whether the identity can read the Sync Document. */
  read?: boolean | null;
  /** Whether the identity can update the Sync Document. */
  write?: boolean | null;
  /** Whether the identity can delete the Sync Document. */
  manage?: boolean | null;
  /** The absolute URL of the Sync Document Permission resource. */
  url?: string | null;
};

export const syncV1ServiceDocumentDocumentPermissionSchema: Schema<SyncV1ServiceDocumentDocumentPermission> =
  s.object<SyncV1ServiceDocumentDocumentPermission>({
    accountSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    documentSid: s.optionalNullable(s.string()),
    identity: s.optionalNullable(s.string()),
    read: s.optionalNullable(s.boolean()),
    write: s.optionalNullable(s.boolean()),
    manage: s.optionalNullable(s.boolean()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      serviceSid: "service_sid",
      documentSid: "document_sid",
    },
  });
