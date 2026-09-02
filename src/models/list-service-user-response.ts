import { s, type Schema } from "../core/index.js";
import {
  conversationsV1ServiceServiceUserSchema,
  type ConversationsV1ServiceServiceUser,
} from "./conversations-v1-service-service-user.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListServiceUserResponse = {
  users?: ConversationsV1ServiceServiceUser[];
  meta?: Meta;
};

export const listServiceUserResponseSchema: Schema<ListServiceUserResponse> =
  s.object<ListServiceUserResponse>({
    users: s.optional(s.array(s.lazy(() => conversationsV1ServiceServiceUserSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
