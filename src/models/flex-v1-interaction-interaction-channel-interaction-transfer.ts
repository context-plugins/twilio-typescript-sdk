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
  /** The unique string created by Twilio to identify an Interaction Transfer resource. */
  sid?: string | null;
  /** The SID of the Instance associated with the Transfer. */
  instanceSid?: string | null;
  /** The SID of the Account that created the Transfer. */
  accountSid?: string | null;
  /** The Interaction Sid for this channel. */
  interactionSid?: string | null;
  /** The Channel Sid for this Transfer. */
  channelSid?: string | null;
  /** The Execution SID associated with the Transfer. */
  executionSid?: string | null;
  /** The type of the Transfer. Can be: `cold`, `warm`. */
  type?: InteractionTransferEnumTransferType;
  /** The status of the Transfer. Can be: `active`, `completed`, `failed`. */
  status?: InteractionTransferEnumTransferStatus;
  /** The SID of the Participant initiating the Transfer. */
  from?: string | null;
  /** The SID of the Participant receiving the Transfer. */
  to?: string | null;
  /** The SID of the Note associated with the Transfer. */
  noteSid?: string | null;
  /** The SID of the Summary associated with the Transfer. */
  summarySid?: string | null;
  /** The date and time when the Transfer was created. */
  dateCreated?: Date | null;
  /** The date and time when the Transfer was last updated. */
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
