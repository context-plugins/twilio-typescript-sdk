import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsV1ServiceServiceBindingSchema,
  type ConversationsV1ServiceServiceBinding,
} from "./conversations-v1-service-service-binding.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListServiceBindingResponse = {
  bindings?: ConversationsV1ServiceServiceBinding[];
  meta?: Meta;
};

export const listServiceBindingResponseSchema: Schema<ListServiceBindingResponse> =
  s.object<ListServiceBindingResponse>({
    bindings: s.optional(s.array(s.lazy(() => conversationsV1ServiceServiceBindingSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
