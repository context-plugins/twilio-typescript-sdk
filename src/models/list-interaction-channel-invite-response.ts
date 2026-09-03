import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  flexV1InteractionInteractionChannelInteractionChannelInviteSchema,
  type FlexV1InteractionInteractionChannelInteractionChannelInvite,
} from "./flex-v1-interaction-interaction-channel-interaction-channel-invite.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListInteractionChannelInviteResponse = {
  invites?: FlexV1InteractionInteractionChannelInteractionChannelInvite[];
  meta?: Meta;
};

export const listInteractionChannelInviteResponseSchema: Schema<ListInteractionChannelInviteResponse> =
  s.object<ListInteractionChannelInviteResponse>({
    invites: s.optional(
      s.array(s.lazy(() => flexV1InteractionInteractionChannelInteractionChannelInviteSchema)),
    ),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
