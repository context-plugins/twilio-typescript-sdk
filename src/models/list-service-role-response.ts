import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  conversationsV1ServiceServiceRoleSchema,
  type ConversationsV1ServiceServiceRole,
} from "./conversations-v1-service-service-role.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListServiceRoleResponse = {
  roles?: ConversationsV1ServiceServiceRole[];
  meta?: Meta;
};

export const listServiceRoleResponseSchema: Schema<ListServiceRoleResponse> =
  s.object<ListServiceRoleResponse>({
    roles: s.optional(s.array(s.lazy(() => conversationsV1ServiceServiceRoleSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
