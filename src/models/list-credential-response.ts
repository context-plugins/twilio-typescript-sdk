import { s, type Schema } from "../core/index.js";
import {
  conversationsV1CredentialSchema,
  type ConversationsV1Credential,
} from "./conversations-v1-credential.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListCredentialResponse = {
  credentials?: ConversationsV1Credential[];
  meta?: Meta;
};

export const listCredentialResponseSchema: Schema<ListCredentialResponse> = s.object<ListCredentialResponse>({
  credentials: s.optional(s.array(s.lazy(() => conversationsV1CredentialSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
