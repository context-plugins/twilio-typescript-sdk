import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the sender. */
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
