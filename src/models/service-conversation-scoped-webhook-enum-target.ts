import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The target of this webhook: `webhook`, `studio`, `trigger` */
export const ServiceConversationScopedWebhookEnumTarget = {
  Webhook: "webhook",
  Trigger: "trigger",
  Studio: "studio",
} as const;
export type ServiceConversationScopedWebhookEnumTarget =
  | (typeof ServiceConversationScopedWebhookEnumTarget)[keyof typeof ServiceConversationScopedWebhookEnumTarget]
  | (string & {});

export const serviceConversationScopedWebhookEnumTargetSchema: EnumSchema<ServiceConversationScopedWebhookEnumTarget> =
  s.enumOf<ServiceConversationScopedWebhookEnumTarget>(ServiceConversationScopedWebhookEnumTarget);
