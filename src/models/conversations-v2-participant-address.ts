import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { channel11Schema, type Channel11 } from "./channel11.js";

export type ConversationsV2ParticipantAddress = {
  /**
   * The address value formatted according to channel type:
   * - SMS/VOICE: E.164 phone number (such as "+18005550100")
   * - WHATSAPP: Phone number with whatsapp prefix (such as "whatsapp:+18005550100")
   * - RCS: Sender ID or phone number with rcs prefix (such as "rcs:brand_acme_agent" or
   *   "rcs:+18005550100")
   * - CHAT: Customer-defined string identifier
   */
  address: string;
  /** Channel type for the Participant address. */
  channel: Channel11;
  /** Participant ID associated with this address. */
  participantId?: string;
};

export const conversationsV2ParticipantAddressSchema: Schema<ConversationsV2ParticipantAddress> =
  s.object<ConversationsV2ParticipantAddress>({
    address: s.string(),
    channel: channel11Schema,
    participantId: s.optional(s.string()),
  });
