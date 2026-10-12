import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { channel2Schema, type Channel2 } from "./channel2.js";

export type ConversationsV2SendAddress = {
  /**
   * The address value formatted according to channel type:
   * - SMS: E.164 phone number (such as "+18005550100")
   * - WHATSAPP: Phone number with whatsapp prefix (such as "whatsapp:+18005550100")
   * - RCS: Sender ID or phone number with rcs prefix (such as "rcs:brand_acme_agent" or
   *   "rcs:+18005550100")
   * - CHAT: Customer-defined string identifier
   */
  address: string;
  /**
   * Channel type for sending communications. Note: VOICE is receive-only and not supported for send
   * operations.
   */
  channel: Channel2;
  /**
   * Optional Participant ID. If omitted, the system will resolve or create the participant based on
   * address and channel.
   */
  participantId?: string;
};

export const conversationsV2SendAddressSchema: Schema<ConversationsV2SendAddress> =
  s.object<ConversationsV2SendAddress>({
    address: s.string(),
    channel: channel2Schema,
    participantId: s.optional(s.string()),
  });
