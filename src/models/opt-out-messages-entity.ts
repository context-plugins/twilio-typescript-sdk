import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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
