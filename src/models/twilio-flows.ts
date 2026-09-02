import { s, type Schema } from "../core/index.js";
import { flowsPageSchema, type FlowsPage } from "./flows-page.js";

export type TwilioFlows = {
  body: string;
  buttonText: string;
  subtitle?: string;
  mediaUrl?: string;
  pages: FlowsPage[];
  type: string;
};

export const twilioFlowsSchema: Schema<TwilioFlows> = s.object<TwilioFlows>({
  body: s.string(),
  buttonText: s.string(),
  subtitle: s.optional(s.string()),
  mediaUrl: s.optional(s.string()),
  pages: s.array(s.lazy(() => flowsPageSchema)),
  type: s.string(),
  _keysMap: {
    buttonText: "button_text",
    mediaUrl: "media_url",
  },
});
