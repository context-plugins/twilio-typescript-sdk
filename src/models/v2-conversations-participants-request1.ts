import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address11Schema, type Address11 } from "./address11.js";
import { type3Schema, type Type3 } from "./type3.js";

export type V2ConversationsParticipantsRequest1 = {
  name?: string;
  type?: Type3;
  profileId?: string;
  addresses?: Address11[];
};

export const v2ConversationsParticipantsRequest1Schema: Schema<V2ConversationsParticipantsRequest1> =
  s.object<V2ConversationsParticipantsRequest1>({
    name: s.optional(s.string()),
    type: s.optional(s.lazy(() => type3Schema)),
    profileId: s.optional(s.string()),
    addresses: s.optional(s.array(s.lazy(() => address11Schema))),
  });
