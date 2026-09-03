import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV1CreateEmbeddedSessionRequest = {
  themeSetId?: string;
};

export const numbersV1CreateEmbeddedSessionRequestSchema: Schema<NumbersV1CreateEmbeddedSessionRequest> =
  s.object<NumbersV1CreateEmbeddedSessionRequest>({
    themeSetId: s.optional(s.string()),
  });
