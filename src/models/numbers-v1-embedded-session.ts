import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV1EmbeddedSession = {
  /** Session ID for the compliance embeddable. */
  sessionId: string;
  /** Ephemeral session token for the compliance embeddable. */
  sessionToken: string;
};

export const numbersV1EmbeddedSessionSchema: Schema<NumbersV1EmbeddedSession> =
  s.object<NumbersV1EmbeddedSession>({
    sessionId: s.string(),
    sessionToken: s.string(),
  });
