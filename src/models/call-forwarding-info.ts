import { s, type Schema } from "../core/index.js";

export type CallForwardingInfo = {
  callForwardingEnabled?: boolean;
  errorCode?: number;
};

export const callForwardingInfoSchema: Schema<CallForwardingInfo> = s.object<CallForwardingInfo>({
  callForwardingEnabled: s.optional(s.boolean()),
  errorCode: s.optional(s.number()),
  _keysMap: {
    callForwardingEnabled: "call_forwarding_enabled",
    errorCode: "error_code",
  },
});
