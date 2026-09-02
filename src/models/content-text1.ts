import { s, type Schema } from "../core/index.js";

export type ContentText1 = {
  type: "TEXT";
  text: string;
};

export const contentText1Schema: Schema<ContentText1> = s.object<ContentText1>({
  type: s.literal("TEXT"),
  text: s.string(),
});
