import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlexV1InsightsConversations = {
  /** The id of the account. */
  accountId?: string | null;
  /** The unique id of the conversation */
  conversationId?: string | null;
  /** The count of segments for a conversation @default 0 */
  segmentCount?: number;
  /** The Segments of a conversation */
  segments?: Record<string, unknown>[] | null;
};

export const flexV1InsightsConversationsSchema: Schema<FlexV1InsightsConversations> =
  s.object<FlexV1InsightsConversations>({
    accountId: s.optionalNullable(s.string()),
    conversationId: s.optionalNullable(s.string()),
    segmentCount: s.defaulted(s.int(), 0),
    segments: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    _keysMap: {
      accountId: "account_id",
      conversationId: "conversation_id",
      segmentCount: "segment_count",
    },
  });
