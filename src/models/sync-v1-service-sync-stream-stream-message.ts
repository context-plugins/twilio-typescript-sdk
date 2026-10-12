import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SyncV1ServiceSyncStreamStreamMessage = {
  /** The unique string that we created to identify the Stream Message resource. */
  sid?: string | null;
  /**
   * An arbitrary, schema-less object that contains the Stream Message body. Can be up to 4 KiB in
   * length.
   */
  data?: Record<string, unknown> | null;
};

export const syncV1ServiceSyncStreamStreamMessageSchema: Schema<SyncV1ServiceSyncStreamStreamMessage> =
  s.object<SyncV1ServiceSyncStreamStreamMessage>({
    sid: s.optionalNullable(s.string()),
    data: s.optionalNullable(s.record(s.string(), s.unknown())),
  });
