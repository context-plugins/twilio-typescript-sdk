import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
