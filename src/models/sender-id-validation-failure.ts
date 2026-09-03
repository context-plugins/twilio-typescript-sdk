import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SenderIdValidationFailure = {
  errorCode: number;
  reason: string;
};

export const senderIdValidationFailureSchema: Schema<SenderIdValidationFailure> =
  s.object<SenderIdValidationFailure>({
    errorCode: s.number(),
    reason: s.string(),
    _keysMap: {
      errorCode: "error_code",
    },
  });
