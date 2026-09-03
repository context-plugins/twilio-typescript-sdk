import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { callbackMethod2Schema, type CallbackMethod2 } from "./callback-method2.js";
import { fallbackMethod1Schema, type FallbackMethod1 } from "./fallback-method1.js";

export type MessagingV2ChannelsSenderWebhook = {
  callbackUrl?: string | null;
  callbackMethod?: CallbackMethod2 | null;
  fallbackUrl?: string | null;
  fallbackMethod?: FallbackMethod1 | null;
  statusCallbackUrl?: string | null;
  statusCallbackMethod?: string | null;
};

export const messagingV2ChannelsSenderWebhookSchema: Schema<MessagingV2ChannelsSenderWebhook> =
  s.object<MessagingV2ChannelsSenderWebhook>({
    callbackUrl: s.optionalNullable(s.string()),
    callbackMethod: s.optionalNullable(s.lazy(() => callbackMethod2Schema)),
    fallbackUrl: s.optionalNullable(s.string()),
    fallbackMethod: s.optionalNullable(s.lazy(() => fallbackMethod1Schema)),
    statusCallbackUrl: s.optionalNullable(s.string()),
    statusCallbackMethod: s.optionalNullable(s.string()),
    _keysMap: {
      callbackUrl: "callback_url",
      callbackMethod: "callback_method",
      fallbackUrl: "fallback_url",
      fallbackMethod: "fallback_method",
      statusCallbackUrl: "status_callback_url",
      statusCallbackMethod: "status_callback_method",
    },
  });
