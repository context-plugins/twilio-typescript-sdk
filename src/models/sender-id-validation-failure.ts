import { s, type Schema } from "../core/index.js";

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
