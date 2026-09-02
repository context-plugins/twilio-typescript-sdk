import { s, type Schema } from "../core/index.js";

export type SyncV1ServiceDocumentDocumentPermission = {
  accountSid?: string | null;
  serviceSid?: string | null;
  documentSid?: string | null;
  identity?: string | null;
  read?: boolean | null;
  write?: boolean | null;
  manage?: boolean | null;
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
