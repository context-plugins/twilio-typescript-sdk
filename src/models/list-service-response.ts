import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messagingV1ServiceSchema, type MessagingV1Service } from "./messaging-v1-service.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListServiceResponse = {
  services?: MessagingV1Service[];
  meta?: Meta;
};

export const listServiceResponseSchema: Schema<ListServiceResponse> = s.object<ListServiceResponse>({
  services: s.optional(s.array(s.lazy(() => messagingV1ServiceSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
