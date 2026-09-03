import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  messagingV1ServiceChannelSenderSchema,
  type MessagingV1ServiceChannelSender,
} from "./messaging-v1-service-channel-sender.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListChannelSenderResponse = {
  senders?: MessagingV1ServiceChannelSender[];
  meta?: Meta;
};

export const listChannelSenderResponseSchema: Schema<ListChannelSenderResponse> =
  s.object<ListChannelSenderResponse>({
    senders: s.optional(s.array(s.lazy(() => messagingV1ServiceChannelSenderSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
