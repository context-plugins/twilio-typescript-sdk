import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV1CreateEmbeddedSessionResponse = {
  /** Registration identifier (BU-prefixed). */
  id: string;
  /** Session ID for the compliance embeddable. */
  sessionId: string;
  /** Ephemeral session token for the compliance embeddable. */
  sessionToken: string;
};

export const numbersV1CreateEmbeddedSessionResponseSchema: Schema<NumbersV1CreateEmbeddedSessionResponse> =
  s.object<NumbersV1CreateEmbeddedSessionResponse>({
    id: s.string(),
    sessionId: s.string(),
    sessionToken: s.string(),
  });
