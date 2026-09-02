import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  numbersV2RegulatoryComplianceRegulationSchema,
  type NumbersV2RegulatoryComplianceRegulation,
} from "./numbers-v2-regulatory-compliance-regulation.js";

export type ListRegulationResponse = {
  results?: NumbersV2RegulatoryComplianceRegulation[];
  meta?: Meta;
};

export const listRegulationResponseSchema: Schema<ListRegulationResponse> = s.object<ListRegulationResponse>({
  results: s.optional(s.array(s.lazy(() => numbersV2RegulatoryComplianceRegulationSchema))),
  meta: s.optional(s.lazy(() => metaSchema)),
});
