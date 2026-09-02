import { s, type Schema } from "../core/index.js";
import { conversationsV1ServiceSchema, type ConversationsV1Service } from "./conversations-v1-service.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListServiceResponse2 = {
  services?: ConversationsV1Service[];
  meta?: Meta;
};

export const listServiceResponse2Schema: Schema<ListServiceResponse2> = s.object<ListServiceResponse2>({
  services: s.optional(s.array(s.lazy(() => conversationsV1ServiceSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
