import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  serviceConversationMessageReceiptSchema,
  type ServiceConversationMessageReceipt,
} from "./service-conversation-message-receipt.js";

export type ListServiceConversationMessageReceiptResponse = {
  deliveryReceipts?: ServiceConversationMessageReceipt[];
  meta?: Meta;
};

export const listServiceConversationMessageReceiptResponseSchema: Schema<ListServiceConversationMessageReceiptResponse> =
  s.object<ListServiceConversationMessageReceiptResponse>({
    deliveryReceipts: s.optional(s.array(s.lazy(() => serviceConversationMessageReceiptSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
    _keysMap: {
      deliveryReceipts: "delivery_receipts",
    },
  });
