import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreatePasskeysChallengeRequest = {
  identity?: string;
  factorSid?: string;
};

export const createPasskeysChallengeRequestSchema: Schema<CreatePasskeysChallengeRequest> =
  s.object<CreatePasskeysChallengeRequest>({
    identity: s.optional(s.string()),
    factorSid: s.optional(s.string()),
    _keysMap: {
      factorSid: "factor_sid",
    },
  });
