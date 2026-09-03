import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SyncV1ServiceSyncStreamStreamMessage = {
  sid?: string | null;
  data?: Record<string, unknown> | null;
};

export const syncV1ServiceSyncStreamStreamMessageSchema: Schema<SyncV1ServiceSyncStreamStreamMessage> =
  s.object<SyncV1ServiceSyncStreamStreamMessage>({
    sid: s.optionalNullable(s.string()),
    data: s.optionalNullable(s.record(s.string(), s.unknown())),
  });
