import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  syncV1ServiceSyncMapSyncMapPermissionSchema,
  type SyncV1ServiceSyncMapSyncMapPermission,
} from "./sync-v1-service-sync-map-sync-map-permission.js";

export type ListSyncMapPermissionResponse = {
  permissions?: SyncV1ServiceSyncMapSyncMapPermission[];
  meta?: Meta;
};

export const listSyncMapPermissionResponseSchema: Schema<ListSyncMapPermissionResponse> =
  s.object<ListSyncMapPermissionResponse>({
    permissions: s.optional(s.array(s.lazy(() => syncV1ServiceSyncMapSyncMapPermissionSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
