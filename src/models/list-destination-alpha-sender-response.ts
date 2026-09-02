import { s, type Schema } from "../core/index.js";
import {
  messagingV1ServiceDestinationAlphaSenderSchema,
  type MessagingV1ServiceDestinationAlphaSender,
} from "./messaging-v1-service-destination-alpha-sender.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListDestinationAlphaSenderResponse = {
  alphaSenders?: MessagingV1ServiceDestinationAlphaSender[];
  meta?: Meta;
};

export const listDestinationAlphaSenderResponseSchema: Schema<ListDestinationAlphaSenderResponse> =
  s.object<ListDestinationAlphaSenderResponse>({
    alphaSenders: s.optional(s.array(s.lazy(() => messagingV1ServiceDestinationAlphaSenderSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
    _keysMap: {
      alphaSenders: "alpha_senders",
    },
  });
