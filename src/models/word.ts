import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Word = {
  /** The transcribed word. */
  text: string;
  /** Start timestamp of this word. */
  startTime?: Date;
  /** End timestamp of this word. */
  endTime?: Date;
};

export const wordSchema: Schema<Word> = s.object<Word>({
  text: s.string(),
  startTime: s.optional(s.dateTime()),
  endTime: s.optional(s.dateTime()),
});
