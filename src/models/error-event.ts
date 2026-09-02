import { s, type Schema } from "../core/index.js";

export type ErrorEvent = {
  errorCode?: number;
  message?: string;
};

export const errorEventSchema: Schema<ErrorEvent> = s.object<ErrorEvent>({
  errorCode: s.optional(s.number()),
  message: s.optional(s.string()),
  _keysMap: {
    errorCode: "error_code",
  },
});
