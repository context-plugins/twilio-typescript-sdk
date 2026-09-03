import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV1PortingWebhookConfiguration = {
  url?: string | null;
  portInTargetUrl?: string | null;
  portOutTargetUrl?: string | null;
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
