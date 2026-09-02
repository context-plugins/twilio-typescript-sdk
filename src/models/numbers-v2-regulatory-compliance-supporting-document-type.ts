import { s, type Schema } from "../core/index.js";

export type NumbersV2RegulatoryComplianceSupportingDocumentType = {
  sid?: string | null;
  friendlyName?: string | null;
  machineName?: string | null;
  fields?: Record<string, unknown>[] | null;
  url?: string | null;
};

export const numbersV2RegulatoryComplianceSupportingDocumentTypeSchema: Schema<NumbersV2RegulatoryComplianceSupportingDocumentType> =
  s.object<NumbersV2RegulatoryComplianceSupportingDocumentType>({
    sid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    machineName: s.optionalNullable(s.string()),
    fields: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      friendlyName: "friendly_name",
      machineName: "machine_name",
    },
  });
