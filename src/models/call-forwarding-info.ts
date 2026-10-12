import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CallForwardingInfo = {
  callForwardingEnabled?: boolean;
  errorCode?: number;
};

export const callForwardingInfoSchema: Schema<CallForwardingInfo> = s.object<CallForwardingInfo>({
  callForwardingEnabled: s.optional(s.boolean()),
  errorCode: s.optional(s.int()),
  _keysMap: {
    callForwardingEnabled: "call_forwarding_enabled",
    errorCode: "error_code",
  },
});
