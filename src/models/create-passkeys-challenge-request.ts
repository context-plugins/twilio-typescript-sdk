import { s, type Schema } from "../core/index.js";

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
