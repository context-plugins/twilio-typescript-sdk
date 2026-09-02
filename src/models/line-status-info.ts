import { s, type Schema } from "../core/index.js";

export type LineStatusInfo = {
  status?: string;
  errorCode?: number;
};

export const lineStatusInfoSchema: Schema<LineStatusInfo> = s.object<LineStatusInfo>({
  status: s.optional(s.string()),
  errorCode: s.optional(s.number()),
  _keysMap: {
    errorCode: "error_code",
  },
});
