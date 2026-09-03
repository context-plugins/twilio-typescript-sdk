import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  messagingV2ChannelsSenderResponseSchema,
  type MessagingV2ChannelsSenderResponse,
} from "./messaging-v2-channels-sender-response.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListChannelsSenderResponse = {
  senders?: MessagingV2ChannelsSenderResponse[];
  meta?: Meta;
};

export const listChannelsSenderResponseSchema: Schema<ListChannelsSenderResponse> =
  s.object<ListChannelsSenderResponse>({
    senders: s.optional(s.array(s.lazy(() => messagingV2ChannelsSenderResponseSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
