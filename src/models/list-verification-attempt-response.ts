import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  verifyV2VerificationAttemptSchema,
  type VerifyV2VerificationAttempt,
} from "./verify-v2-verification-attempt.js";

export type ListVerificationAttemptResponse = {
  attempts?: VerifyV2VerificationAttempt[];
  meta?: Meta;
};

export const listVerificationAttemptResponseSchema: Schema<ListVerificationAttemptResponse> =
  s.object<ListVerificationAttemptResponse>({
    attempts: s.optional(s.array(s.lazy(() => verifyV2VerificationAttemptSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
