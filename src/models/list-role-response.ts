import { s, type Schema } from "../core/index.js";
import { conversationsV1RoleSchema, type ConversationsV1Role } from "./conversations-v1-role.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListRoleResponse = {
  roles?: ConversationsV1Role[];
  meta?: Meta;
};

export const listRoleResponseSchema: Schema<ListRoleResponse> = s.object<ListRoleResponse>({
  roles: s.optional(s.array(s.lazy(() => conversationsV1RoleSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
