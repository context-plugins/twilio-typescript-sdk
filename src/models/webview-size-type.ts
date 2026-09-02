import { s, type EnumSchema } from "../core/index.js";

export const WebviewSizeType = {
  Tall: "TALL",
  Full: "FULL",
  Half: "HALF",
  None: "NONE",
} as const;
export type WebviewSizeType = (typeof WebviewSizeType)[keyof typeof WebviewSizeType] | (string & {});

export const webviewSizeTypeSchema: EnumSchema<WebviewSizeType> = s.enumOf<WebviewSizeType>(WebviewSizeType);
