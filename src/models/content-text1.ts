import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ContentText1 = {
  /** @default "TEXT" */
  type?: "TEXT";
  text: string;
};

export const contentText1Schema: Schema<ContentText1> = s.object<ContentText1>({
  type: s.defaulted(s.literal("TEXT"), "TEXT"),
  text: s.string(),
});
