import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV1PortingWebhookConfigurationFetch = {
  url?: string | null;
  portInTargetUrl?: string | null;
  portOutTargetUrl?: string | null;
  notificationsOf?: string[] | null;
  portInTargetDateCreated?: Date | null;
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
