import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  proxyV1ServiceSessionParticipantSchema,
  type ProxyV1ServiceSessionParticipant,
} from "./proxy-v1-service-session-participant.js";

export type ListParticipantResponse1 = {
  participants?: ProxyV1ServiceSessionParticipant[];
  meta?: Meta;
};

export const listParticipantResponse1Schema: Schema<ListParticipantResponse1> =
  s.object<ListParticipantResponse1>({
    participants: s.optional(s.array(s.lazy(() => proxyV1ServiceSessionParticipantSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
