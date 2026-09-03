import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WhatsappFlows = {
  body: string;
  buttonText: string;
  subtitle?: string;
  mediaUrl?: string;
  flowId: string;
  flowToken?: string;
  flowFirstPageId?: string;
  isFlowFirstPageEndpoint?: boolean;
};

export const whatsappFlowsSchema: Schema<WhatsappFlows> = s.object<WhatsappFlows>({
  body: s.string(),
  buttonText: s.string(),
  subtitle: s.optional(s.string()),
  mediaUrl: s.optional(s.string()),
  flowId: s.string(),
  flowToken: s.optional(s.string()),
  flowFirstPageId: s.optional(s.string()),
  isFlowFirstPageEndpoint: s.optional(s.boolean()),
  _keysMap: {
    buttonText: "button_text",
    mediaUrl: "media_url",
    flowId: "flow_id",
    flowToken: "flow_token",
    flowFirstPageId: "flow_first_page_id",
    isFlowFirstPageEndpoint: "is_flow_first_page_endpoint",
  },
});
