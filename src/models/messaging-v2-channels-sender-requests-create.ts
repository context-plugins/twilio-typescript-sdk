import { s, type Schema } from "../core/index.js";
import {
  messagingV2ChannelsSenderConfigurationSchema,
  type MessagingV2ChannelsSenderConfiguration,
} from "./messaging-v2-channels-sender-configuration.js";
import {
  messagingV2ChannelsSenderProfileSchema,
  type MessagingV2ChannelsSenderProfile,
} from "./messaging-v2-channels-sender-profile.js";
import {
  messagingV2ChannelsSenderWebhookSchema,
  type MessagingV2ChannelsSenderWebhook,
} from "./messaging-v2-channels-sender-webhook.js";

export type MessagingV2ChannelsSenderRequestsCreate = {
  senderId: string | null;
  configuration?: MessagingV2ChannelsSenderConfiguration | null;
  webhook?: MessagingV2ChannelsSenderWebhook | null;
  profile?: MessagingV2ChannelsSenderProfile | null;
};

export const messagingV2ChannelsSenderRequestsCreateSchema: Schema<MessagingV2ChannelsSenderRequestsCreate> =
  s.object<MessagingV2ChannelsSenderRequestsCreate>({
    senderId: s.nullable(s.string()),
    configuration: s.optionalNullable(s.lazy(() => messagingV2ChannelsSenderConfigurationSchema)),
    webhook: s.optionalNullable(s.lazy(() => messagingV2ChannelsSenderWebhookSchema)),
    profile: s.optionalNullable(s.lazy(() => messagingV2ChannelsSenderProfileSchema)),
    _keysMap: {
      senderId: "sender_id",
    },
  });
