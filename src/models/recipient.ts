import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { channel11Schema, type Channel11 } from "./channel11.js";
import { deliveryStatusSchema, type DeliveryStatus } from "./delivery-status.js";

export type Recipient = {
  address: string;
  channel: Channel11;
  participantId?: string;
  deliveryStatus?: DeliveryStatus;
};

export const recipientSchema: Schema<Recipient> = s.object<Recipient>({
  address: s.string(),
  channel: channel11Schema,
  participantId: s.optional(s.string()),
  deliveryStatus: s.optional(s.lazy(() => deliveryStatusSchema)),
});
