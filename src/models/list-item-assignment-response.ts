import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  numbersV2RegulatoryComplianceBundleItemAssignmentSchema,
  type NumbersV2RegulatoryComplianceBundleItemAssignment,
} from "./numbers-v2-regulatory-compliance-bundle-item-assignment.js";

export type ListItemAssignmentResponse = {
  results?: NumbersV2RegulatoryComplianceBundleItemAssignment[];
  meta?: Meta;
};

export const listItemAssignmentResponseSchema: Schema<ListItemAssignmentResponse> =
  s.object<ListItemAssignmentResponse>({
    results: s.optional(s.array(s.lazy(() => numbersV2RegulatoryComplianceBundleItemAssignmentSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
  });
