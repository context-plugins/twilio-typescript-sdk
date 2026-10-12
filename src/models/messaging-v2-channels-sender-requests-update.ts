import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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

export type MessagingV2ChannelsSenderRequestsUpdate = {
  /** The configuration settings for creating a sender. */
  configuration?: MessagingV2ChannelsSenderConfiguration | null;
  /** The configuration settings for webhooks. */
  webhook?: MessagingV2ChannelsSenderWebhook | null;
  /** The profile information for the sender. */
  profile?: MessagingV2ChannelsSenderProfile | null;
};

export const messagingV2ChannelsSenderRequestsUpdateSchema: Schema<MessagingV2ChannelsSenderRequestsUpdate> =
  s.object<MessagingV2ChannelsSenderRequestsUpdate>({
    configuration: s.optionalNullable(s.lazy(() => messagingV2ChannelsSenderConfigurationSchema)),
    webhook: s.optionalNullable(s.lazy(() => messagingV2ChannelsSenderWebhookSchema)),
    profile: s.optionalNullable(s.lazy(() => messagingV2ChannelsSenderProfileSchema)),
  });
