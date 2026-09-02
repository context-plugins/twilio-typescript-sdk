import { s, type Schema } from "../core/index.js";
import { amdStatusCallbackMethodSchema, type AmdStatusCallbackMethod } from "./amd-status-callback-method.js";

export type ConversationsV2StatusCallbackConfig = {
  url: string;
  method?: AmdStatusCallbackMethod;
};

export const conversationsV2StatusCallbackConfigSchema: Schema<ConversationsV2StatusCallbackConfig> =
  s.object<ConversationsV2StatusCallbackConfig>({
    url: s.string(),
    method: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
  });
