import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  verifyV2ServiceEntityFactorSchema,
  type VerifyV2ServiceEntityFactor,
} from "./verify-v2-service-entity-factor.js";

export type ListFactorResponse = {
  factors?: VerifyV2ServiceEntityFactor[];
  meta?: Meta;
};

export const listFactorResponseSchema: Schema<ListFactorResponse> = s.object<ListFactorResponse>({
  factors: s.optional(s.array(s.lazy(() => verifyV2ServiceEntityFactorSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
