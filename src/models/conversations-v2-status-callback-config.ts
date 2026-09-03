import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
