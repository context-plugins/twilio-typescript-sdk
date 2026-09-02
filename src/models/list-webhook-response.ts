import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import { verifyV2ServiceWebhookSchema, type VerifyV2ServiceWebhook } from "./verify-v2-service-webhook.js";

export type ListWebhookResponse = {
  webhooks?: VerifyV2ServiceWebhook[];
  meta?: Meta;
};

export const listWebhookResponseSchema: Schema<ListWebhookResponse> = s.object<ListWebhookResponse>({
  webhooks: s.optional(s.array(s.lazy(() => verifyV2ServiceWebhookSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
