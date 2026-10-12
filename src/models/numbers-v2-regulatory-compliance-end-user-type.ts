import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV2RegulatoryComplianceEndUserType = {
  /** The unique string that identifies the End-User Type resource. */
  sid?: string | null;
  /**
   * A human-readable description that is assigned to describe the End-User Type resource. Examples
   * can include first name, last name, email, business name, etc
   */
  friendlyName?: string | null;
  /**
   * A machine-readable description of the End-User Type resource. Examples can include first_name,
   * last_name, email, business_name, etc.
   */
  machineName?: string | null;
  /**
   * The required information for creating an End-User. The required fields will change as
   * regulatory needs change and will differ for businesses and individuals.
   */
  fields?: Record<string, unknown>[] | null;
  /** The absolute URL of the End-User Type resource. */
  url?: string | null;
};

export const numbersV2RegulatoryComplianceEndUserTypeSchema: Schema<NumbersV2RegulatoryComplianceEndUserType> =
  s.object<NumbersV2RegulatoryComplianceEndUserType>({
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
