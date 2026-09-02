import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  syncV1ServiceSyncStreamSchema,
  type SyncV1ServiceSyncStream,
} from "./sync-v1-service-sync-stream.js";

export type ListSyncStreamResponse = {
  streams?: SyncV1ServiceSyncStream[];
  meta?: Meta;
};

export const listSyncStreamResponseSchema: Schema<ListSyncStreamResponse> = s.object<ListSyncStreamResponse>({
  streams: s.optional(s.array(s.lazy(() => syncV1ServiceSyncStreamSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
