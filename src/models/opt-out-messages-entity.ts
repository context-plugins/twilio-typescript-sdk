import { s, type Schema } from "../core/index.js";

export type OptOutMessagesEntity = {
  keywordType: string;
  messageType: string;
  message: string;
};

export const optOutMessagesEntitySchema: Schema<OptOutMessagesEntity> = s.object<OptOutMessagesEntity>({
  keywordType: s.string(),
  messageType: s.string(),
  message: s.string(),
});
