import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status11Schema, type Status11 } from "./status11.js";

export type ConversationsV2Action = {
  /** Unique identifier for this Action. */
  id: string;
  /** The type of action. Accepted values: SEND_MESSAGE. */
  type: string;
  /**
   * Current status of the Action.
   * - PENDING: Action accepted, awaiting downstream confirmation
   * - COMPLETED: Downstream backend confirmed the action
   * - FAILED: Downstream backend reported a failure
   */
  status: Status11;
  /** The conversation this action belongs to. */
  conversationId: string;
  /**
   * Named identifiers from downstream. For SEND_MESSAGE:
   * - messageSid: The downstream message SID (present when PENDING or COMPLETED)
   * - communicationId: The Communication ID (present when COMPLETED)
   */
  related?: Record<string, string>;
  /** Timestamp when the action was created. */
  createdAt: Date;
  /** Timestamp when the action was last updated. */
  updatedAt?: Date;
  /** Timestamp when the action reached a terminal status. */
  completedAt?: Date;
};

export const conversationsV2ActionSchema: Schema<ConversationsV2Action> = s.object<ConversationsV2Action>({
  id: s.string(),
  type: s.string(),
  status: status11Schema,
  conversationId: s.string(),
  related: s.optional(s.record(s.string(), s.string())),
  createdAt: s.dateTime(),
  updatedAt: s.optional(s.dateTime()),
  completedAt: s.optional(s.dateTime()),
});
