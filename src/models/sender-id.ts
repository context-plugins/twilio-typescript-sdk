import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SenderId = {
  /** Account that owns the Sender ID. */
  accountSid: string;
  /** The date and time when the Sender ID was created. */
  dateCreated: Date;
  /** The date and time when the Sender ID was last updated. */
  dateUpdated: Date;
  /** The alphanumeric sender ID. */
  senderId: string;
  /** The unique identifier of the Sender ID. */
  sid: string;
  /** Messages per second (throughput) for the Sender ID. */
  mps: number;
};

export const senderIdSchema: Schema<SenderId> = s.object<SenderId>({
  accountSid: s.string(),
  dateCreated: s.dateTime(),
  dateUpdated: s.dateTime(),
  senderId: s.string(),
  sid: s.string(),
  mps: s.int(),
  _keysMap: {
    accountSid: "account_sid",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
    senderId: "sender_id",
  },
});
