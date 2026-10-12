import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ContentText = {
  /** Content type discriminator. @default "TEXT" */
  type?: "TEXT";
  /** Message text content. */
  text: string;
};

export const contentTextSchema: Schema<ContentText> = s.object<ContentText>({
  type: s.defaulted(s.literal("TEXT"), "TEXT"),
  text: s.string(),
});
