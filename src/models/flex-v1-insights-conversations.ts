import { s, type Schema } from "../core/index.js";

export type FlexV1InsightsConversations = {
  accountId?: string | null;
  conversationId?: string | null;
  segmentCount?: number;
  segments?: Record<string, unknown>[] | null;
};

export const flexV1InsightsConversationsSchema: Schema<FlexV1InsightsConversations> =
  s.object<FlexV1InsightsConversations>({
    accountId: s.optionalNullable(s.string()),
    conversationId: s.optionalNullable(s.string()),
    segmentCount: s.optional(s.number()),
    segments: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    _keysMap: {
      accountId: "account_id",
      conversationId: "conversation_id",
      segmentCount: "segment_count",
    },
  });
