import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  interactionChannelEnumChannelStatusSchema,
  type InteractionChannelEnumChannelStatus,
} from "./interaction-channel-enum-channel-status.js";
import {
  interactionChannelEnumTypeSchema,
  type InteractionChannelEnumType,
} from "./interaction-channel-enum-type.js";

export type FlexV1InteractionInteractionChannel = {
  /**
   * The unique string created by Twilio to identify an Interaction Channel resource, prefixed with
   * UO.
   */
  sid?: string | null;
  /** The unique string created by Twilio to identify an Interaction resource, prefixed with KD. */
  interactionSid?: string | null;
  /**
   * The Interaction Channel's type. Can be: `sms`, `email`, `chat`, `whatsapp`, `web`, `messenger`,
   * or `gbm`. **Note:** These can be different from the task channel type specified in the Routing
   * attributes. Task channel type corresponds to channel capacity while this channel type is the
   * actual media type
   */
  type?: InteractionChannelEnumType;
  /** The status of this channel. */
  status?: InteractionChannelEnumChannelStatus;
  /** The Twilio error code for a failed channel. */
  errorCode?: number | null;
  /** The error message for a failed channel. */
  errorMessage?: string | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const flexV1InteractionInteractionChannelSchema: Schema<FlexV1InteractionInteractionChannel> =
  s.object<FlexV1InteractionInteractionChannel>({
    sid: s.optionalNullable(s.string()),
    interactionSid: s.optionalNullable(s.string()),
    type: s.optional(s.lazy(() => interactionChannelEnumTypeSchema)),
    status: s.optional(s.lazy(() => interactionChannelEnumChannelStatusSchema)),
    errorCode: s.optionalNullable(s.int()),
    errorMessage: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      interactionSid: "interaction_sid",
      errorCode: "error_code",
      errorMessage: "error_message",
    },
  });
