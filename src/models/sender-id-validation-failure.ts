import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SenderIdValidationFailure = {
  /** Associated error code with validation failure */
  errorCode: number;
  /** Friendly description of error for validation failure */
  reason: string;
};

export const senderIdValidationFailureSchema: Schema<SenderIdValidationFailure> =
  s.object<SenderIdValidationFailure>({
    errorCode: s.int(),
    reason: s.string(),
    _keysMap: {
      errorCode: "error_code",
    },
  });
