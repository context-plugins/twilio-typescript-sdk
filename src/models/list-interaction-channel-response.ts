import { s, type Schema } from "../core/index.js";
import {
  flexV1InteractionInteractionChannelSchema,
  type FlexV1InteractionInteractionChannel,
} from "./flex-v1-interaction-interaction-channel.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListInteractionChannelResponse = {
  channels?: FlexV1InteractionInteractionChannel[];
  meta?: Meta;
};

export const listInteractionChannelResponseSchema: Schema<ListInteractionChannelResponse> =
  s.object<ListInteractionChannelResponse>({
    channels: s.optional(s.array(s.lazy(() => flexV1InteractionInteractionChannelSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
