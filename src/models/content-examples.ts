import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ContentExamples = {
  examples?: string[];
};

export const contentExamplesSchema: Schema<ContentExamples> = s.object<ContentExamples>({
  examples: s.optional(s.array(s.string())),
});
