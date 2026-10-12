import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { configurationSchema, type Configuration } from "./configuration.js";
import {
  conversationsV2ParticipantSchema,
  type ConversationsV2Participant,
} from "./conversations-v2-participant.js";
import { status3Schema, type Status3 } from "./status3.js";

export type ConversationsV2Conversation = {
  /** Conversation ID. */
  id: string;
  /** Account ID. */
  accountId: string;
  /** Configuration ID. */
  configurationId: string;
  /** Conversation status. */
  status?: Status3;
  /** Conversation name. */
  name?: string | null;
  /** Timestamp when this Conversation was created. */
  createdAt?: Date;
  /** Timestamp when this Conversation was last updated. */
  updatedAt?: Date;
  /** Full configuration settings for this Conversation. */
  configuration?: Configuration;
  /** Participants in this Conversation. */
  participants?: ConversationsV2Participant[];
};

export const conversationsV2ConversationSchema: Schema<ConversationsV2Conversation> =
  s.object<ConversationsV2Conversation>({
    id: s.string(),
    accountId: s.string(),
    configurationId: s.string(),
    status: s.optional(s.lazy(() => status3Schema)),
    name: s.optionalNullable(s.string()),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    configuration: s.optional(s.lazy(() => configurationSchema)),
    participants: s.optional(s.array(s.lazy(() => conversationsV2ParticipantSchema))),
  });
