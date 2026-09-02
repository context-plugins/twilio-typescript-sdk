import { s, type Schema } from "../core/index.js";
import {
  flexV1InteractionInteractionChannelInteractionChannelParticipantSchema,
  type FlexV1InteractionInteractionChannelInteractionChannelParticipant,
} from "./flex-v1-interaction-interaction-channel-interaction-channel-participant.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListInteractionChannelParticipantResponse = {
  participants?: FlexV1InteractionInteractionChannelInteractionChannelParticipant[];
  meta?: Meta;
};

export const listInteractionChannelParticipantResponseSchema: Schema<ListInteractionChannelParticipantResponse> =
  s.object<ListInteractionChannelParticipantResponse>({
    participants: s.optional(
      s.array(s.lazy(() => flexV1InteractionInteractionChannelInteractionChannelParticipantSchema)),
    ),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
