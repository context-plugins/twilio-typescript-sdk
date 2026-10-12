import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StatusTimeouts = {
  /**
   * The inactivity timeout in minutes. For more information, see [Conversation
   * lifecycle](/docs/platform/conversations/concepts/lifecycle).
   */
  inactive?: number;
  /**
   * The close timeout in minutes. For more information, see [Conversation
   * lifecycle](/docs/platform/conversations/concepts/lifecycle).
   */
  closed?: number;
};

export const statusTimeoutsSchema: Schema<StatusTimeouts> = s.object<StatusTimeouts>({
  inactive: s.optional(s.int()),
  closed: s.optional(s.int()),
});
