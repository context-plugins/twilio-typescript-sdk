import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ContentText = {
  type: "TEXT";
  text: string;
};

export const contentTextSchema: Schema<ContentText> = s.object<ContentText>({
  type: s.literal("TEXT"),
  text: s.string(),
});
