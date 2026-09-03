import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Word = {
  text: string;
  startTime?: Date;
  endTime?: Date;
};

export const wordSchema: Schema<Word> = s.object<Word>({
  text: s.string(),
  startTime: s.optional(s.dateTime()),
  endTime: s.optional(s.dateTime()),
});
