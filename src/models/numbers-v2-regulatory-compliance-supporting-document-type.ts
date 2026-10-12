import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV2RegulatoryComplianceSupportingDocumentType = {
  /** The unique string that identifies the Supporting Document Type resource. */
  sid?: string | null;
  /** A human-readable description of the Supporting Document Type resource. */
  friendlyName?: string | null;
  /** The machine-readable description of the Supporting Document Type resource. */
  machineName?: string | null;
  /**
   * The required information for creating a Supporting Document. The required fields will change as
   * regulatory needs change and will differ for businesses and individuals.
   */
  fields?: Record<string, unknown>[] | null;
  /** The absolute URL of the Supporting Document Type resource. */
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
