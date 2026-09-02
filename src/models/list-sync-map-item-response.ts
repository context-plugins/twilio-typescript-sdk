import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  syncV1ServiceSyncMapSyncMapItemSchema,
  type SyncV1ServiceSyncMapSyncMapItem,
} from "./sync-v1-service-sync-map-sync-map-item.js";

export type ListSyncMapItemResponse = {
  items?: SyncV1ServiceSyncMapSyncMapItem[];
  meta?: Meta;
};

export const listSyncMapItemResponseSchema: Schema<ListSyncMapItemResponse> =
  s.object<ListSyncMapItemResponse>({
    items: s.optional(s.array(s.lazy(() => syncV1ServiceSyncMapSyncMapItemSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
