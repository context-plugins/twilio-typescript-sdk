import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  syncV1ServiceSyncListSyncListPermissionSchema,
  type SyncV1ServiceSyncListSyncListPermission,
} from "./sync-v1-service-sync-list-sync-list-permission.js";

export type ListSyncListPermissionResponse = {
  permissions?: SyncV1ServiceSyncListSyncListPermission[];
  meta?: Meta;
};

export const listSyncListPermissionResponseSchema: Schema<ListSyncListPermissionResponse> =
  s.object<ListSyncListPermissionResponse>({
    permissions: s.optional(s.array(s.lazy(() => syncV1ServiceSyncListSyncListPermissionSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
