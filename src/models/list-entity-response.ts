import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import { verifyV2ServiceEntitySchema, type VerifyV2ServiceEntity } from "./verify-v2-service-entity.js";

export type ListEntityResponse = {
  entities?: VerifyV2ServiceEntity[];
  meta?: Meta;
};

export const listEntityResponseSchema: Schema<ListEntityResponse> = s.object<ListEntityResponse>({
  entities: s.optional(s.array(s.lazy(() => verifyV2ServiceEntitySchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
