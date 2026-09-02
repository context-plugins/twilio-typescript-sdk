import { s, type EnumSchema } from "../core/index.js";

export const ChannelsSenderEnumStatus = {
  Creating: "CREATING",
  Online: "ONLINE",
  Offline: "OFFLINE",
  PendingVerification: "PENDING_VERIFICATION",
  Verifying: "VERIFYING",
  OnlineUpdating: "ONLINE:UPDATING",
  TwilioReview: "TWILIO_REVIEW",
  Draft: "DRAFT",
  Stubbed: "STUBBED",
} as const;
export type ChannelsSenderEnumStatus =
  | (typeof ChannelsSenderEnumStatus)[keyof typeof ChannelsSenderEnumStatus]
  | (string & {});

export const channelsSenderEnumStatusSchema: EnumSchema<ChannelsSenderEnumStatus> =
  s.enumOf<ChannelsSenderEnumStatus>(ChannelsSenderEnumStatus);
