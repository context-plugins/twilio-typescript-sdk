import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LineStatusInfo = {
  status?: string;
  errorCode?: number;
};

export const lineStatusInfoSchema: Schema<LineStatusInfo> = s.object<LineStatusInfo>({
  status: s.optional(s.string()),
  errorCode: s.optional(s.int()),
  _keysMap: {
    errorCode: "error_code",
  },
});
