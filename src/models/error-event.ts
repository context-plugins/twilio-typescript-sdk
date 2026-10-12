import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ErrorEvent = {
  /** Error code. */
  errorCode?: number;
  /** Error message. */
  message?: string;
};

export const errorEventSchema: Schema<ErrorEvent> = s.object<ErrorEvent>({
  errorCode: s.optional(s.int()),
  message: s.optional(s.string()),
  _keysMap: {
    errorCode: "error_code",
  },
});
