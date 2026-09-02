import { s, type Schema } from "../core/index.js";
import { conversationsV1UserSchema, type ConversationsV1User } from "./conversations-v1-user.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListUserResponse = {
  users?: ConversationsV1User[];
  meta?: Meta;
};

export const listUserResponseSchema: Schema<ListUserResponse> = s.object<ListUserResponse>({
  users: s.optional(s.array(s.lazy(() => conversationsV1UserSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
