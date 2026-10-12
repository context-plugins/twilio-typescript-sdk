import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  channelsSenderEnumStatusSchema,
  type ChannelsSenderEnumStatus,
} from "./channels-sender-enum-status.js";
import {
  messagingV2ChannelsSenderConfigurationSchema,
  type MessagingV2ChannelsSenderConfiguration,
} from "./messaging-v2-channels-sender-configuration.js";
import {
  messagingV2ChannelsSenderOfflineReasonsItemsSchema,
  type MessagingV2ChannelsSenderOfflineReasonsItems,
} from "./messaging-v2-channels-sender-offline-reasons-items.js";
import {
  messagingV2ChannelsSenderProfileGenericResponseSchema,
  type MessagingV2ChannelsSenderProfileGenericResponse,
} from "./messaging-v2-channels-sender-profile-generic-response.js";
import {
  messagingV2ChannelsSenderPropertiesSchema,
  type MessagingV2ChannelsSenderProperties,
} from "./messaging-v2-channels-sender-properties.js";
import {
  messagingV2ChannelsSenderWebhookSchema,
  type MessagingV2ChannelsSenderWebhook,
} from "./messaging-v2-channels-sender-webhook.js";
import {
  messagingV2RcsComplianceResponseSchema,
  type MessagingV2RcsComplianceResponse,
} from "./messaging-v2-rcs-compliance-response.js";

export type MessagingV2ChannelsSenderResponse = {
  /** The SID of the sender. */
  sid?: string | null;
  /** The status of the sender. */
  status?: ChannelsSenderEnumStatus;
  /** The ID of the sender in `whatsapp:<E.164_PHONE_NUMBER>` format. */
  senderId?: string | null;
  /** The configuration settings for creating a sender. */
  configuration?: MessagingV2ChannelsSenderConfiguration | null;
  /** The configuration settings for webhooks. */
  webhook?: MessagingV2ChannelsSenderWebhook | null;
  /** The profile information for the sender. */
  profile?: MessagingV2ChannelsSenderProfileGenericResponse | null;
  /** The additional properties for the sender. */
  properties?: MessagingV2ChannelsSenderProperties | null;
  /** The reasons why the sender is offline. */
  offlineReasons?: (MessagingV2ChannelsSenderOfflineReasonsItems | null)[] | null;
  /** The KYC compliance information. This section consists of response to the request launch. */
  compliance?: MessagingV2RcsComplianceResponse | null;
  /** The URL of the resource. */
  url?: string | null;
};

export const messagingV2ChannelsSenderResponseSchema: Schema<MessagingV2ChannelsSenderResponse> =
  s.object<MessagingV2ChannelsSenderResponse>({
    sid: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => channelsSenderEnumStatusSchema)),
    senderId: s.optionalNullable(s.string()),
    configuration: s.optionalNullable(s.lazy(() => messagingV2ChannelsSenderConfigurationSchema)),
    webhook: s.optionalNullable(s.lazy(() => messagingV2ChannelsSenderWebhookSchema)),
    profile: s.optionalNullable(s.lazy(() => messagingV2ChannelsSenderProfileGenericResponseSchema)),
    properties: s.optionalNullable(s.lazy(() => messagingV2ChannelsSenderPropertiesSchema)),
    offlineReasons: s.optionalNullable(
      s.array(s.nullable(s.lazy(() => messagingV2ChannelsSenderOfflineReasonsItemsSchema))),
    ),
    compliance: s.optionalNullable(s.lazy(() => messagingV2RcsComplianceResponseSchema)),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      senderId: "sender_id",
      offlineReasons: "offline_reasons",
    },
  });
