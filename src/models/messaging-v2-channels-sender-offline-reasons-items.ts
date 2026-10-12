import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV2ChannelsSenderOfflineReasonsItems = {
  /** The error code. */
  code?: string | null;
  /** The error message. */
  message?: string | null;
  /** The URL to get more information about the error. */
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
