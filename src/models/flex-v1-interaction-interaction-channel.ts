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
  sid?: string | null;
  interactionSid?: string | null;
  type?: InteractionChannelEnumType;
  status?: InteractionChannelEnumChannelStatus;
  errorCode?: number | null;
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
    errorCode: s.optionalNullable(s.number()),
    errorMessage: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      interactionSid: "interaction_sid",
      errorCode: "error_code",
      errorMessage: "error_message",
    },
  });
