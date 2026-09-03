import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { configurationSchema, type Configuration } from "./configuration.js";
import {
  conversationsV2ParticipantSchema,
  type ConversationsV2Participant,
} from "./conversations-v2-participant.js";
import { status3Schema, type Status3 } from "./status3.js";

export type ConversationsV2Conversation = {
  id: string;
  accountId: string;
  configurationId: string;
  status?: Status3;
  name?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  configuration?: Configuration;
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
