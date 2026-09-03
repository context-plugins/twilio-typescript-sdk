import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  regulationEnumEndUserTypeSchema,
  type RegulationEnumEndUserType,
} from "./regulation-enum-end-user-type.js";

export type NumbersV2RegulatoryComplianceRegulation = {
  sid?: string | null;
  friendlyName?: string | null;
  isoCountry?: string | null;
  numberType?: string | null;
  endUserType?: RegulationEnumEndUserType;
  requirements?: Record<string, unknown> | null;
  url?: string | null;
};

export const numbersV2RegulatoryComplianceRegulationSchema: Schema<NumbersV2RegulatoryComplianceRegulation> =
  s.object<NumbersV2RegulatoryComplianceRegulation>({
    sid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    isoCountry: s.optionalNullable(s.string()),
    numberType: s.optionalNullable(s.string()),
    endUserType: s.optional(s.lazy(() => regulationEnumEndUserTypeSchema)),
    requirements: s.optionalNullable(s.record(s.string(), s.unknown())),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      friendlyName: "friendly_name",
      isoCountry: "iso_country",
      numberType: "number_type",
      endUserType: "end_user_type",
    },
  });
