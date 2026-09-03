import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { syncV1ServiceSyncMapSchema, type SyncV1ServiceSyncMap } from "./sync-v1-service-sync-map.js";

export type ListSyncMapResponse = {
  maps?: SyncV1ServiceSyncMap[];
  meta?: Meta;
};

export const listSyncMapResponseSchema: Schema<ListSyncMapResponse> = s.object<ListSyncMapResponse>({
  maps: s.optional(s.array(s.lazy(() => syncV1ServiceSyncMapSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
