import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessageTypeConfig = {
  key: string;
  friendlyName: string;
};

export const messageTypeConfigSchema: Schema<MessageTypeConfig> = s.object<MessageTypeConfig>({
  key: s.string(),
  friendlyName: s.string(),
  _keysMap: {
    friendlyName: "friendly_name",
  },
});
