import { s, type Schema } from "../core/index.js";

export type ContentExamples = {
  examples?: string[];
};

export const contentExamplesSchema: Schema<ContentExamples> = s.object<ContentExamples>({
  examples: s.optional(s.array(s.string())),
});
