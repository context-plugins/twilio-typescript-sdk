import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conversationsV2AddressSchema, type ConversationsV2Address } from "./conversations-v2-address.js";
import { type2Schema, type Type2 } from "./type2.js";

export type ConversationsV2Participant = {
  /** Participant ID. */
  id: string;
  /** Conversation ID. */
  conversationId: string;
  /** Account ID. */
  accountId: string;
  /** Participant display name. */
  name: string;
  /** Type of Participant in the Conversation. */
  type?: Type2;
  /**
   * Profile ID. Note: This field is only resolved for `CUSTOMER` participant types, not for
   * `HUMAN_AGENT` or `AI_AGENT` participants.
   */
  profileId?: string;
  /**
   * Communication addresses for this Participant. Address format varies by channel:
   * - SMS/VOICE: E.164 phone number (such as "+18005550100")
   * - EMAIL: Email address (such as "user@example.com")
   * - WHATSAPP: Phone number with whatsapp prefix (such as "whatsapp:+18005550100")
   * - RCS: Sender ID or phone number with rcs prefix (such as "rcs:brand_acme_agent" or
   *   "rcs:+18005550100")
   */
  addresses?: ConversationsV2Address[];
  /** Timestamp when this Participant was created. */
  createdAt?: Date;
  /** Timestamp when this Participant was last updated. */
  updatedAt?: Date;
};

export const conversationsV2ParticipantSchema: Schema<ConversationsV2Participant> =
  s.object<ConversationsV2Participant>({
    id: s.string(),
    conversationId: s.string(),
    accountId: s.string(),
    name: s.string(),
    type: s.optional(s.lazy(() => type2Schema)),
    profileId: s.optional(s.string()),
    addresses: s.optional(s.array(s.lazy(() => conversationsV2AddressSchema))),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
  });
