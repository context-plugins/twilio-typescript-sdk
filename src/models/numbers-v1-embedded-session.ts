import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV1EmbeddedSession = {
  sessionId: string;
  sessionToken: string;
};

export const numbersV1EmbeddedSessionSchema: Schema<NumbersV1EmbeddedSession> =
  s.object<NumbersV1EmbeddedSession>({
    sessionId: s.string(),
    sessionToken: s.string(),
  });
