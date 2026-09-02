import { s, type Schema } from "../core/index.js";
import { cardActionTypeSchema, type CardActionType } from "./card-action-type.js";
import { webviewSizeTypeSchema, type WebviewSizeType } from "./webview-size-type.js";

export type CardAction = {
  type: CardActionType;
  title: string;
  url?: string;
  phone?: string;
  id?: string;
  code?: string;
  webviewSize?: WebviewSizeType;
};

export const cardActionSchema: Schema<CardAction> = s.object<CardAction>({
  type: cardActionTypeSchema,
  title: s.string(),
  url: s.optional(s.string()),
  phone: s.optional(s.string()),
  id: s.optional(s.string()),
  code: s.optional(s.string()),
  webviewSize: s.optional(s.lazy(() => webviewSizeTypeSchema)),
  _keysMap: {
    webviewSize: "webview_size",
  },
});
