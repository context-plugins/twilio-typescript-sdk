import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { status21Schema, type Status21 } from "./status21.js";

/** Status of a long-running operation. */
export type ConversationsV2OperationStatus = {
  /** Unique identifier for the long-running operation. */
  operationId: string;
  /** Current status of the operation. */
  status: Status21;
  /** Timestamp when the operation was created. */
  createdAt: Date;
  /** Timestamp when the operation completed. Only present for completed or failed operations. */
  completedAt?: Date | null;
  /** URL to poll for operation status. */
  statusUrl: string;
  /** Error details if the operation failed. Follows RFC 9457 Problem Details. */
  error?: Error | null;
  /**
   * Named resource identifiers associated with this operation. Keys depend on the operation type:
   * - config-create, config-update, config-delete: configurationId
   * - conversation-delete: conversationId
   */
  related?: Record<string, string> | null;
};

export const conversationsV2OperationStatusSchema: Schema<ConversationsV2OperationStatus> =
  s.object<ConversationsV2OperationStatus>({
    operationId: s.string(),
    status: status21Schema,
    createdAt: s.dateTime(),
    completedAt: s.optionalNullable(s.dateTime()),
    statusUrl: s.string(),
    error: s.optionalNullable(s.lazy(() => errorSchema)),
    related: s.optionalNullable(s.record(s.string(), s.string())),
  });
