import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsV2SendMessagePayloadSchema,
  type ConversationsV2SendMessagePayload,
} from "./conversations-v2-send-message-payload.js";

export type ConversationsV2SendMessageActionRequest = {
  /** Action type discriminator. Accepted values: SEND_MESSAGE. */
  type: string;
  payload: ConversationsV2SendMessagePayload;
};

export const conversationsV2SendMessageActionRequestSchema: Schema<ConversationsV2SendMessageActionRequest> =
  s.object<ConversationsV2SendMessageActionRequest>({
    type: s.string(),
    payload: conversationsV2SendMessagePayloadSchema,
  });
