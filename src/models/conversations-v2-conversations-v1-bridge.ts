import { s, type Schema } from "../core/index.js";

export type ConversationsV2ConversationsV1Bridge = {
  serviceId: string;
};

export const conversationsV2ConversationsV1BridgeSchema: Schema<ConversationsV2ConversationsV1Bridge> =
  s.object<ConversationsV2ConversationsV1Bridge>({
    serviceId: s.string(),
  });
