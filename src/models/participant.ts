import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address1Schema, type Address1 } from "./address1.js";
import { type11Schema, type Type11 } from "./type11.js";

export type Participant = {
  name?: string;
  type?: Type11;
  profileId?: string;
  addresses?: Address1[];
};

export const participantSchema: Schema<Participant> = s.object<Participant>({
  name: s.optional(s.string()),
  type: s.optional(s.lazy(() => type11Schema)),
  profileId: s.optional(s.string()),
  addresses: s.optional(s.array(s.lazy(() => address1Schema))),
});
