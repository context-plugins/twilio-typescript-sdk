import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  numbersV2RegulatoryComplianceEndUserTypeSchema,
  type NumbersV2RegulatoryComplianceEndUserType,
} from "./numbers-v2-regulatory-compliance-end-user-type.js";

export type ListEndUserTypeResponse = {
  endUserTypes?: NumbersV2RegulatoryComplianceEndUserType[];
  meta?: Meta;
};

export const listEndUserTypeResponseSchema: Schema<ListEndUserTypeResponse> =
  s.object<ListEndUserTypeResponse>({
    endUserTypes: s.optional(s.array(s.lazy(() => numbersV2RegulatoryComplianceEndUserTypeSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
    _keysMap: {
      endUserTypes: "end_user_types",
    },
  });
