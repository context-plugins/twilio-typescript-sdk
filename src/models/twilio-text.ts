import { s, type Schema } from "../core/index.js";

export type TwilioText = {
  body: string;
};

export const twilioTextSchema: Schema<TwilioText> = s.object<TwilioText>({
  body: s.string(),
});
