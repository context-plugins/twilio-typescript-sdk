import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status11Schema, type Status11 } from "./status11.js";

export type ConversationsV2Action = {
  id: string;
  type: string;
  status: Status11;
  conversationId: string;
  related?: Record<string, string>;
  createdAt: Date;
  updatedAt?: Date;
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
