import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  proxyV1ServiceSessionInteractionSchema,
  type ProxyV1ServiceSessionInteraction,
} from "./proxy-v1-service-session-interaction.js";

export type ListInteractionResponse = {
  interactions?: ProxyV1ServiceSessionInteraction[];
  meta?: Meta;
};

export const listInteractionResponseSchema: Schema<ListInteractionResponse> =
  s.object<ListInteractionResponse>({
    interactions: s.optional(s.array(s.lazy(() => proxyV1ServiceSessionInteractionSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
