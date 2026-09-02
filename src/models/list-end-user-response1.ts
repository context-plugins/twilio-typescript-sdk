import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import { trusthubV1EndUserSchema, type TrusthubV1EndUser } from "./trusthub-v1-end-user.js";

export type ListEndUserResponse1 = {
  results?: TrusthubV1EndUser[];
  meta?: Meta;
};

export const listEndUserResponse1Schema: Schema<ListEndUserResponse1> = s.object<ListEndUserResponse1>({
  results: s.optional(s.array(s.lazy(() => trusthubV1EndUserSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
