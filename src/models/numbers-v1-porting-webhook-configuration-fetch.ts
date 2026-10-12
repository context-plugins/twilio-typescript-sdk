import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV1PortingWebhookConfigurationFetch = {
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
  /** Creation date for the port in webhook configuration */
  portInTargetDateCreated?: Date | null;
  /** Creation date for the port out webhook configuration */
  portOutTargetDateCreated?: Date | null;
};

export const numbersV1PortingWebhookConfigurationFetchSchema: Schema<NumbersV1PortingWebhookConfigurationFetch> =
  s.object<NumbersV1PortingWebhookConfigurationFetch>({
    url: s.optionalNullable(s.string()),
    portInTargetUrl: s.optionalNullable(s.string()),
    portOutTargetUrl: s.optionalNullable(s.string()),
    notificationsOf: s.optionalNullable(s.array(s.string())),
    portInTargetDateCreated: s.optionalNullable(s.dateTime()),
    portOutTargetDateCreated: s.optionalNullable(s.dateTime()),
    _keysMap: {
      portInTargetUrl: "port_in_target_url",
      portOutTargetUrl: "port_out_target_url",
      notificationsOf: "notifications_of",
      portInTargetDateCreated: "port_in_target_date_created",
      portOutTargetDateCreated: "port_out_target_date_created",
    },
  });
