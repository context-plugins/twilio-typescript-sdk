import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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
