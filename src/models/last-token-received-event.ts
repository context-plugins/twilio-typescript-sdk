import { s, type Schema } from "../core/index.js";

export type LastTokenReceivedEvent = {
  totalTokens?: number;
  totalWords?: number;
};

export const lastTokenReceivedEventSchema: Schema<LastTokenReceivedEvent> = s.object<LastTokenReceivedEvent>({
  totalTokens: s.optional(s.number()),
  totalWords: s.optional(s.number()),
  _keysMap: {
    totalTokens: "total_tokens",
    totalWords: "total_words",
  },
});
