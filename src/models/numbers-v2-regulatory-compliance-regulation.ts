import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  regulationEnumEndUserTypeSchema,
  type RegulationEnumEndUserType,
} from "./regulation-enum-end-user-type.js";

export type NumbersV2RegulatoryComplianceRegulation = {
  /** The unique string that identifies the Regulation resource. */
  sid?: string | null;
  /**
   * A human-readable description that is assigned to describe the Regulation resource. Examples can
   * include Germany: Mobile - Business.
   */
  friendlyName?: string | null;
  /** The ISO country code of the phone number's country. */
  isoCountry?: string | null;
  /**
   * The type of phone number restricted by the regulatory requirement. For example, Germany mobile
   * phone numbers provisioned by businesses require a business name with commercial register proof
   * from the Handelsregisterauszug and a proof of address from Handelsregisterauszug or a trade
   * license by Gewerbeanmeldung.
   */
  numberType?: string | null;
  /** The type of End User the regulation requires - can be `individual` or `business`. */
  endUserType?: RegulationEnumEndUserType;
  /**
   * The SID of an object that holds the regulatory information of the phone number country, phone
   * number type, and end user type.
   */
  requirements?: Record<string, unknown> | null;
  /** The absolute URL of the Regulation resource. */
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
