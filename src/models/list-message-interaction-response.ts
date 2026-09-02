import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  proxyV1ServiceSessionParticipantMessageInteractionSchema,
  type ProxyV1ServiceSessionParticipantMessageInteraction,
} from "./proxy-v1-service-session-participant-message-interaction.js";

export type ListMessageInteractionResponse = {
  interactions?: ProxyV1ServiceSessionParticipantMessageInteraction[];
  meta?: Meta;
};

export const listMessageInteractionResponseSchema: Schema<ListMessageInteractionResponse> =
  s.object<ListMessageInteractionResponse>({
    interactions: s.optional(s.array(s.lazy(() => proxyV1ServiceSessionParticipantMessageInteractionSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
