import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V2IndicatorsTypingJsonResponse = {
  /** Indicates if the typing indicator was sent successfully. */
  success?: boolean;
};

export const v2IndicatorsTypingJsonResponseSchema: Schema<V2IndicatorsTypingJsonResponse> =
  s.object<V2IndicatorsTypingJsonResponse>({
    success: s.optional(s.boolean()),
  });
