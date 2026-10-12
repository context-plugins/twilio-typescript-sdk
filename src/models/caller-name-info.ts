import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CallerNameInfo = {
  callerName?: string;
  callerType?: string;
  errorCode?: number;
};

export const callerNameInfoSchema: Schema<CallerNameInfo> = s.object<CallerNameInfo>({
  callerName: s.optional(s.string()),
  callerType: s.optional(s.string()),
  errorCode: s.optional(s.int()),
  _keysMap: {
    callerName: "caller_name",
    callerType: "caller_type",
    errorCode: "error_code",
  },
});
