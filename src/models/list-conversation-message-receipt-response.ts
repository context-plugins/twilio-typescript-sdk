import { s, type Schema } from "../core/index.js";
import {
  conversationsV1ConversationConversationMessageConversationMessageReceiptSchema,
  type ConversationsV1ConversationConversationMessageConversationMessageReceipt,
} from "./conversations-v1-conversation-conversation-message-conversation-message-receipt.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListConversationMessageReceiptResponse = {
  deliveryReceipts?: ConversationsV1ConversationConversationMessageConversationMessageReceipt[];
  meta?: Meta;
};

export const listConversationMessageReceiptResponseSchema: Schema<ListConversationMessageReceiptResponse> =
  s.object<ListConversationMessageReceiptResponse>({
    deliveryReceipts: s.optional(
      s.array(s.lazy(() => conversationsV1ConversationConversationMessageConversationMessageReceiptSchema)),
    ),
    meta: s.optional(s.lazy(() => metaSchema)),
    _keysMap: {
      deliveryReceipts: "delivery_receipts",
    },
  });
