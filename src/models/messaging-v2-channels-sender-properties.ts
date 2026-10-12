import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The additional properties for the sender. */
export type MessagingV2ChannelsSenderProperties = {
  /** The quality rating of the sender. */
  qualityRating?: string | null;
  /** The messaging limit of the sender. */
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
