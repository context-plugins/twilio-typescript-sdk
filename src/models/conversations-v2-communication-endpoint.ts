import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { channel4Schema, type Channel4 } from "./channel4.js";

export type ConversationsV2CommunicationEndpoint = {
  participantId?: string;
  address?: string;
  channel?: Channel4;
};

export const conversationsV2CommunicationEndpointSchema: Schema<ConversationsV2CommunicationEndpoint> =
  s.object<ConversationsV2CommunicationEndpoint>({
    participantId: s.optional(s.string()),
    address: s.optional(s.string()),
    channel: s.optional(s.lazy(() => channel4Schema)),
  });
