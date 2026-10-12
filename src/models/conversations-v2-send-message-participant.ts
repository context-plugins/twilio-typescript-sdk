import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { channel3Schema, type Channel3 } from "./channel3.js";

/**
 * Identifies a participant for an Action. Supports three resolution modes:
 * 1. participantId + channel: Resolves address from participant's registered addresses
 * 2. participantId only: Resolves when participant has exactly one address
 * 3. address + channel: Uses explicit address
 */
export type ConversationsV2SendMessageParticipant = {
  /** Participant ID to resolve address from. */
  participantId?: string;
  /** Explicit address formatted according to channel type. */
  address?: string;
  /** Channel type for address resolution. */
  channel?: Channel3;
};

export const conversationsV2SendMessageParticipantSchema: Schema<ConversationsV2SendMessageParticipant> =
  s.object<ConversationsV2SendMessageParticipant>({
    participantId: s.optional(s.string()),
    address: s.optional(s.string()),
    channel: s.optional(s.lazy(() => channel3Schema)),
  });
