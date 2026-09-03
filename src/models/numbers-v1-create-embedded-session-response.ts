import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV1CreateEmbeddedSessionResponse = {
  id: string;
  sessionId: string;
  sessionToken: string;
};

export const numbersV1CreateEmbeddedSessionResponseSchema: Schema<NumbersV1CreateEmbeddedSessionResponse> =
  s.object<NumbersV1CreateEmbeddedSessionResponse>({
    id: s.string(),
    sessionId: s.string(),
    sessionToken: s.string(),
  });
