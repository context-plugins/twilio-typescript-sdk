import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { configuration3Schema, type Configuration3 } from "./configuration3.js";
import { participantSchema, type Participant } from "./participant.js";

export type V2ConversationsRequest = {
  /** The ID of an existing configuration. */
  configurationId: string;
  /** The name of the conversation. */
  name?: string;
  /** Conversation configuration settings. */
  configuration?: Configuration3;
  /** Optional list of Participants to create with the Conversation. */
  participants?: Participant[];
};

export const v2ConversationsRequestSchema: Schema<V2ConversationsRequest> = s.object<V2ConversationsRequest>({
  configurationId: s.string(),
  name: s.optional(s.string()),
  configuration: s.optional(s.lazy(() => configuration3Schema)),
  participants: s.optional(s.array(s.lazy(() => participantSchema))),
});
