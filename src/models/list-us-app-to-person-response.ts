import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  messagingV1ServiceUsAppToPersonResponseSchema,
  type MessagingV1ServiceUsAppToPersonResponse,
} from "./unions/messaging-v1-service-us-app-to-person-response.js";

export type ListUsAppToPersonResponse = {
  compliance?: MessagingV1ServiceUsAppToPersonResponse[];
  meta?: Meta;
};

export const listUsAppToPersonResponseSchema: Schema<ListUsAppToPersonResponse> =
  s.object<ListUsAppToPersonResponse>({
    compliance: s.optional(s.array(s.lazy(() => messagingV1ServiceUsAppToPersonResponseSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
