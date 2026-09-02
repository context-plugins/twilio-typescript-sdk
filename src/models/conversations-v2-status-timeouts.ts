import { s, type Schema } from "../core/index.js";

export type ConversationsV2StatusTimeouts = {
  inactive?: number;
  closed?: number;
};

export const conversationsV2StatusTimeoutsSchema: Schema<ConversationsV2StatusTimeouts> =
  s.object<ConversationsV2StatusTimeouts>({
    inactive: s.optional(s.number()),
    closed: s.optional(s.number()),
  });
