import { s, type Schema } from "../core/index.js";

export type FlexV1Interaction = {
  sid?: string | null;
  channel?: Record<string, unknown> | null;
  routing?: Record<string, unknown> | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
  interactionContextSid?: string | null;
  webhookTtid?: string | null;
};

export const flexV1InteractionSchema: Schema<FlexV1Interaction> = s.object<FlexV1Interaction>({
  sid: s.optionalNullable(s.string()),
  channel: s.optionalNullable(s.record(s.string(), s.unknown())),
  routing: s.optionalNullable(s.record(s.string(), s.unknown())),
  url: s.optionalNullable(s.string()),
  links: s.optionalNullable(s.record(s.string(), s.unknown())),
  interactionContextSid: s.optionalNullable(s.string()),
  webhookTtid: s.optionalNullable(s.string()),
  _keysMap: {
    interactionContextSid: "interaction_context_sid",
    webhookTtid: "webhook_ttid",
  },
});
