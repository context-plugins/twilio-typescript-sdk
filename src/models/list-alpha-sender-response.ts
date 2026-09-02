import { s, type Schema } from "../core/index.js";
import {
  messagingV1ServiceAlphaSenderSchema,
  type MessagingV1ServiceAlphaSender,
} from "./messaging-v1-service-alpha-sender.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListAlphaSenderResponse = {
  alphaSenders?: MessagingV1ServiceAlphaSender[];
  meta?: Meta;
};

export const listAlphaSenderResponseSchema: Schema<ListAlphaSenderResponse> =
  s.object<ListAlphaSenderResponse>({
    alphaSenders: s.optional(s.array(s.lazy(() => messagingV1ServiceAlphaSenderSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
    _keysMap: {
      alphaSenders: "alpha_senders",
    },
  });
