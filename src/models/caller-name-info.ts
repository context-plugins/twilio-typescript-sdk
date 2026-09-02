import { s, type Schema } from "../core/index.js";

export type CallerNameInfo = {
  callerName?: string;
  callerType?: string;
  errorCode?: number;
};

export const callerNameInfoSchema: Schema<CallerNameInfo> = s.object<CallerNameInfo>({
  callerName: s.optional(s.string()),
  callerType: s.optional(s.string()),
  errorCode: s.optional(s.number()),
  _keysMap: {
    callerName: "caller_name",
    callerType: "caller_type",
    errorCode: "error_code",
  },
});
