import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LastTokenReceivedEvent = {
  /** Total number of tokens received. */
  totalTokens?: number;
  /** Total number of words received. */
  totalWords?: number;
};

export const lastTokenReceivedEventSchema: Schema<LastTokenReceivedEvent> = s.object<LastTokenReceivedEvent>({
  totalTokens: s.optional(s.int()),
  totalWords: s.optional(s.int()),
  _keysMap: {
    totalTokens: "total_tokens",
    totalWords: "total_words",
  },
});
