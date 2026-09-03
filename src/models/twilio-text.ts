import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TwilioText = {
  body: string;
};

export const twilioTextSchema: Schema<TwilioText> = s.object<TwilioText>({
  body: s.string(),
});
