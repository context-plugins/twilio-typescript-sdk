import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  syncV1ServiceDocumentDocumentPermissionSchema,
  type SyncV1ServiceDocumentDocumentPermission,
} from "./sync-v1-service-document-document-permission.js";

export type ListDocumentPermissionResponse = {
  permissions?: SyncV1ServiceDocumentDocumentPermission[];
  meta?: Meta;
};

export const listDocumentPermissionResponseSchema: Schema<ListDocumentPermissionResponse> =
  s.object<ListDocumentPermissionResponse>({
    permissions: s.optional(s.array(s.lazy(() => syncV1ServiceDocumentDocumentPermissionSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
