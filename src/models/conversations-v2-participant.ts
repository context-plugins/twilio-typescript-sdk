import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conversationsV2AddressSchema, type ConversationsV2Address } from "./conversations-v2-address.js";
import { type2Schema, type Type2 } from "./type2.js";

export type ConversationsV2Participant = {
  id: string;
  conversationId: string;
  accountId: string;
  name: string;
  type?: Type2;
  profileId?: string;
  addresses?: ConversationsV2Address[];
  createdAt?: Date;
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
