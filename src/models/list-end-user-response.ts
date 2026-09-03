import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  numbersV2RegulatoryComplianceEndUserSchema,
  type NumbersV2RegulatoryComplianceEndUser,
} from "./numbers-v2-regulatory-compliance-end-user.js";

export type ListEndUserResponse = {
  results?: NumbersV2RegulatoryComplianceEndUser[];
  meta?: Meta;
};

export const listEndUserResponseSchema: Schema<ListEndUserResponse> = s.object<ListEndUserResponse>({
  results: s.optional(s.array(s.lazy(() => numbersV2RegulatoryComplianceEndUserSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
