import { s, type EnumSchema } from "../core/index.js";

export const FlexMeetingCallbackEventsEnumWebhookType = {
  Global: "global",
  Interaction: "interaction",
} as const;
export type FlexMeetingCallbackEventsEnumWebhookType =
  | (typeof FlexMeetingCallbackEventsEnumWebhookType)[keyof typeof FlexMeetingCallbackEventsEnumWebhookType]
  | (string & {});

export const flexMeetingCallbackEventsEnumWebhookTypeSchema: EnumSchema<FlexMeetingCallbackEventsEnumWebhookType> =
  s.enumOf<FlexMeetingCallbackEventsEnumWebhookType>(FlexMeetingCallbackEventsEnumWebhookType);
