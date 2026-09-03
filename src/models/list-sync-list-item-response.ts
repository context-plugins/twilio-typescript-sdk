import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  syncV1ServiceSyncListSyncListItemSchema,
  type SyncV1ServiceSyncListSyncListItem,
} from "./sync-v1-service-sync-list-sync-list-item.js";

export type ListSyncListItemResponse = {
  items?: SyncV1ServiceSyncListSyncListItem[];
  meta?: Meta;
};

export const listSyncListItemResponseSchema: Schema<ListSyncListItemResponse> =
  s.object<ListSyncListItemResponse>({
    items: s.optional(s.array(s.lazy(() => syncV1ServiceSyncListSyncListItemSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
