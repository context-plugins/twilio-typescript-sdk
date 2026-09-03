import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V2IndicatorsTypingJsonResponse = {
  success?: boolean;
};

export const v2IndicatorsTypingJsonResponseSchema: Schema<V2IndicatorsTypingJsonResponse> =
  s.object<V2IndicatorsTypingJsonResponse>({
    success: s.optional(s.boolean()),
  });
