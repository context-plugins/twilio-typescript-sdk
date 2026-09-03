import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { syncV1ServiceSyncListSchema, type SyncV1ServiceSyncList } from "./sync-v1-service-sync-list.js";

export type ListSyncListResponse = {
  lists?: SyncV1ServiceSyncList[];
  meta?: Meta;
};

export const listSyncListResponseSchema: Schema<ListSyncListResponse> = s.object<ListSyncListResponse>({
  lists: s.optional(s.array(s.lazy(() => syncV1ServiceSyncListSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
