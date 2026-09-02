import { s, type Schema } from "../core/index.js";
import { configuration3Schema, type Configuration3 } from "./configuration3.js";
import { participantSchema, type Participant } from "./participant.js";

export type V2ConversationsRequest = {
  configurationId: string;
  name?: string;
  configuration?: Configuration3;
  participants?: Participant[];
};

export const v2ConversationsRequestSchema: Schema<V2ConversationsRequest> = s.object<V2ConversationsRequest>({
  configurationId: s.string(),
  name: s.optional(s.string()),
  configuration: s.optional(s.lazy(() => configuration3Schema)),
  participants: s.optional(s.array(s.lazy(() => participantSchema))),
});
