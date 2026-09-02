import { s, type Schema } from "../core/index.js";
import {
  conversationsV2SendMessagePayloadSchema,
  type ConversationsV2SendMessagePayload,
} from "./conversations-v2-send-message-payload.js";

export type ConversationsV2SendMessageActionRequest = {
  type: string;
  payload: ConversationsV2SendMessagePayload;
};

export const conversationsV2SendMessageActionRequestSchema: Schema<ConversationsV2SendMessageActionRequest> =
  s.object<ConversationsV2SendMessageActionRequest>({
    type: s.string(),
    payload: conversationsV2SendMessagePayloadSchema,
  });
