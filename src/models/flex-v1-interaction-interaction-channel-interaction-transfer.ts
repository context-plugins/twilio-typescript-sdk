import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  interactionTransferEnumTransferStatusSchema,
  type InteractionTransferEnumTransferStatus,
} from "./interaction-transfer-enum-transfer-status.js";
import {
  interactionTransferEnumTransferTypeSchema,
  type InteractionTransferEnumTransferType,
} from "./interaction-transfer-enum-transfer-type.js";

export type FlexV1InteractionInteractionChannelInteractionTransfer = {
  sid?: string | null;
  instanceSid?: string | null;
  accountSid?: string | null;
  interactionSid?: string | null;
  channelSid?: string | null;
  executionSid?: string | null;
  type?: InteractionTransferEnumTransferType;
  status?: InteractionTransferEnumTransferStatus;
  from?: string | null;
  to?: string | null;
  noteSid?: string | null;
  summarySid?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
};

export const flexV1InteractionInteractionChannelInteractionTransferSchema: Schema<FlexV1InteractionInteractionChannelInteractionTransfer> =
  s.object<FlexV1InteractionInteractionChannelInteractionTransfer>({
    sid: s.optionalNullable(s.string()),
    instanceSid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    interactionSid: s.optionalNullable(s.string()),
    channelSid: s.optionalNullable(s.string()),
    executionSid: s.optionalNullable(s.string()),
    type: s.optional(s.lazy(() => interactionTransferEnumTransferTypeSchema)),
    status: s.optional(s.lazy(() => interactionTransferEnumTransferStatusSchema)),
    from: s.optionalNullable(s.string()),
    to: s.optionalNullable(s.string()),
    noteSid: s.optionalNullable(s.string()),
    summarySid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      instanceSid: "instance_sid",
      accountSid: "account_sid",
      interactionSid: "interaction_sid",
      channelSid: "channel_sid",
      executionSid: "execution_sid",
      noteSid: "note_sid",
      summarySid: "summary_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
