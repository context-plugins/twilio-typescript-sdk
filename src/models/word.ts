import { s, type Schema } from "../core/index.js";

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
