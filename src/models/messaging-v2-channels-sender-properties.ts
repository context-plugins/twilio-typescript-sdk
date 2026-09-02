import { s, type Schema } from "../core/index.js";

export type MessagingV2ChannelsSenderProperties = {
  qualityRating?: string | null;
  messagingLimit?: string | null;
};

export const messagingV2ChannelsSenderPropertiesSchema: Schema<MessagingV2ChannelsSenderProperties> =
  s.object<MessagingV2ChannelsSenderProperties>({
    qualityRating: s.optionalNullable(s.string()),
    messagingLimit: s.optionalNullable(s.string()),
    _keysMap: {
      qualityRating: "quality_rating",
      messagingLimit: "messaging_limit",
    },
  });
