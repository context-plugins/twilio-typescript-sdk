import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Slim response for an accepted long-running operation. */
export type ConversationsV2OperationAccepted = {
  /** URL to poll for operation status. */
  statusUrl: string;
  /**
   * Named resource identifiers associated with this operation. Keys depend on the operation type:
   * - config-create, config-update, config-delete: configurationId
   * - conversation-delete: conversationId
   */
  related?: Record<string, string> | null;
};

export const conversationsV2OperationAcceptedSchema: Schema<ConversationsV2OperationAccepted> =
  s.object<ConversationsV2OperationAccepted>({
    statusUrl: s.string(),
    related: s.optionalNullable(s.record(s.string(), s.string())),
  });
