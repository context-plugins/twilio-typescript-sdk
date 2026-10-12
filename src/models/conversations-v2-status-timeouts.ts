import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Timeout settings for channel status transitions. */
export type ConversationsV2StatusTimeouts = {
  /** Inactivity timeout in minutes. */
  inactive?: number;
  /** Close timeout in minutes. */
  closed?: number;
};

export const conversationsV2StatusTimeoutsSchema: Schema<ConversationsV2StatusTimeouts> =
  s.object<ConversationsV2StatusTimeouts>({
    inactive: s.optional(s.int()),
    closed: s.optional(s.int()),
  });
