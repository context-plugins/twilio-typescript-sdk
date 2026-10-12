import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { AmdStatusCallbackMethod, amdStatusCallbackMethodSchema } from "./amd-status-callback-method.js";

/** Default webhook configuration for Conversation-level events under this Configuration. */
export type ConversationsV2StatusCallbackConfig = {
  /** Destination URL for webhooks. */
  url: string;
  /** HTTP method used to invoke the webhook URL. @default AmdStatusCallbackMethod.Post */
  method?: AmdStatusCallbackMethod;
};

export const conversationsV2StatusCallbackConfigSchema: Schema<ConversationsV2StatusCallbackConfig> =
  s.object<ConversationsV2StatusCallbackConfig>({
    url: s.string(),
    method: s.defaulted(amdStatusCallbackMethodSchema, AmdStatusCallbackMethod.Post),
  });
