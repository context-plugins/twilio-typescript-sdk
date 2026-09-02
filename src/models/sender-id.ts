import { s, type Schema } from "../core/index.js";

export type SenderId = {
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  senderId: string;
  sid: string;
  mps: number;
};

export const senderIdSchema: Schema<SenderId> = s.object<SenderId>({
  accountSid: s.string(),
  dateCreated: s.dateTime(),
  dateUpdated: s.dateTime(),
  senderId: s.string(),
  sid: s.string(),
  mps: s.number(),
  _keysMap: {
    accountSid: "account_sid",
    dateCreated: "date_created",
    dateUpdated: "date_updated",
    senderId: "sender_id",
  },
});
