import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { channel4Schema, type Channel4 } from "./channel4.js";

/**
 * Endpoint for a communication participant. Supports three resolution modes:
 *
 * 1. **participantId + channel**: Resolves address from participant's registered addresses
 * 2. **participantId only**: Resolves when participant has exactly one address
 * 3. **address + channel**: Uses explicit address (for new recipients or cross-channel)
 */
export type ConversationsV2CommunicationEndpoint = {
  /**
   * Participant ID to resolve address from. When provided, Conversations looks up the participant's
   * registered addresses and selects based on channel.
   */
  participantId?: string;
  /**
   * Explicit address formatted according to channel type:
   * - SMS/VOICE: E.164 phone number (such as "+18005550100")
   * - WHATSAPP: Phone number with whatsapp prefix (such as "whatsapp:+18005550100")
   * - RCS: Sender ID or phone number with rcs prefix (such as "rcs:brand_acme_agent" or
   *   "rcs:+18005550100")
   * - CHAT: Customer-defined string identifier
   */
  address?: string;
  /**
   * Channel type. Required when participantId has multiple addresses or when using explicit
   * address.
   */
  channel?: Channel4;
};

export const conversationsV2CommunicationEndpointSchema: Schema<ConversationsV2CommunicationEndpoint> =
  s.object<ConversationsV2CommunicationEndpoint>({
    participantId: s.optional(s.string()),
    address: s.optional(s.string()),
    channel: s.optional(s.lazy(() => channel4Schema)),
  });
