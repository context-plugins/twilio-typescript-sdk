import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { channel1Schema, type Channel1 } from "./channel1.js";

export type ConversationsV2Address = {
  /** The channel for Communication. */
  channel: Channel1;
  /**
   * The address value formatted according to channel type:
   * - SMS/VOICE: E.164 phone number (such as "+18005550100")
   * - WHATSAPP: Phone number with whatsapp prefix (such as "whatsapp:+18005550100")
   * - RCS: Sender ID or phone number with rcs prefix (such as "rcs:brand_acme_agent" or
   *   "rcs:+18005550100")
   * - CHAT: Customer-defined string identifier
   */
  address: string;
  /** Channel-specific ID for correlating Communications. */
  channelId?: string;
};

export const conversationsV2AddressSchema: Schema<ConversationsV2Address> = s.object<ConversationsV2Address>({
  channel: channel1Schema,
  address: s.string(),
  channelId: s.optional(s.string()),
});
