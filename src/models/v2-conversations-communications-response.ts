import { s, type Schema } from "../core/index.js";
import {
  conversationsV2CommunicationSchema,
  type ConversationsV2Communication,
} from "./conversations-v2-communication.js";
import { meta2Schema, type Meta2 } from "./meta2.js";

export type V2ConversationsCommunicationsResponse = {
  communications: ConversationsV2Communication[];
  meta: Meta2;
};

export const v2ConversationsCommunicationsResponseSchema: Schema<V2ConversationsCommunicationsResponse> =
  s.object<V2ConversationsCommunicationsResponse>({
    communications: s.array(s.lazy(() => conversationsV2CommunicationSchema)),
    meta: meta2Schema,
  });
