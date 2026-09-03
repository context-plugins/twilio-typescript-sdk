import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV2ChannelsSenderOfflineReasonsItems = {
  code?: string | null;
  message?: string | null;
  moreInfo?: string | null;
};

export const messagingV2ChannelsSenderOfflineReasonsItemsSchema: Schema<MessagingV2ChannelsSenderOfflineReasonsItems> =
  s.object<MessagingV2ChannelsSenderOfflineReasonsItems>({
    code: s.optionalNullable(s.string()),
    message: s.optionalNullable(s.string()),
    moreInfo: s.optionalNullable(s.string()),
    _keysMap: {
      moreInfo: "more_info",
    },
  });
