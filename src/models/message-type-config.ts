import { s, type Schema } from "../core/index.js";

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
