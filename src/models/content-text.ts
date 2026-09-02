import { s, type Schema } from "../core/index.js";

export type ContentText = {
  type: "TEXT";
  text: string;
};

export const contentTextSchema: Schema<ContentText> = s.object<ContentText>({
  type: s.literal("TEXT"),
  text: s.string(),
});
