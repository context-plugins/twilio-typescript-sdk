import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FlexMeetingCallbackEventsEnumWebhookType = {
  Global: "global",
  Interaction: "interaction",
} as const;
export type FlexMeetingCallbackEventsEnumWebhookType =
  | (typeof FlexMeetingCallbackEventsEnumWebhookType)[keyof typeof FlexMeetingCallbackEventsEnumWebhookType]
  | (string & {});

export const flexMeetingCallbackEventsEnumWebhookTypeSchema: EnumSchema<FlexMeetingCallbackEventsEnumWebhookType> =
  s.enumOf<FlexMeetingCallbackEventsEnumWebhookType>(FlexMeetingCallbackEventsEnumWebhookType);
