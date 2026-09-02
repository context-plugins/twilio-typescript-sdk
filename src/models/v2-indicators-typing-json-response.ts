import { s, type Schema } from "../core/index.js";

export type V2IndicatorsTypingJsonResponse = {
  success?: boolean;
};

export const v2IndicatorsTypingJsonResponseSchema: Schema<V2IndicatorsTypingJsonResponse> =
  s.object<V2IndicatorsTypingJsonResponse>({
    success: s.optional(s.boolean()),
  });
