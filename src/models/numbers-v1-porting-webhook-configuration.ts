import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV1PortingWebhookConfiguration = {
  /** The URL of the webhook configuration request */
  url?: string | null;
  /**
   * The complete webhook url that will be called when a notification event for port in request or
   * port in phone number happens
   */
  portInTargetUrl?: string | null;
  /**
   * The complete webhook url that will be called when a notification event for a port out phone
   * number happens.
   */
  portOutTargetUrl?: string | null;
  /**
   * A list to filter what notification events to receive for this account and its sub accounts. If
   * it is an empty list, then it means that there are no filters for the notifications events to
   * send in each webhook and all events will get sent.
   */
  notificationsOf?: string[] | null;
};

export const numbersV1PortingWebhookConfigurationSchema: Schema<NumbersV1PortingWebhookConfiguration> =
  s.object<NumbersV1PortingWebhookConfiguration>({
    url: s.optionalNullable(s.string()),
    portInTargetUrl: s.optionalNullable(s.string()),
    portOutTargetUrl: s.optionalNullable(s.string()),
    notificationsOf: s.optionalNullable(s.array(s.string())),
    _keysMap: {
      portInTargetUrl: "port_in_target_url",
      portOutTargetUrl: "port_out_target_url",
      notificationsOf: "notifications_of",
    },
  });
