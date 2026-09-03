import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { customerTypeSchema, type CustomerType } from "./customer-type.js";

export type LosingCarrierInformation = {
  customerName: string;
  accountNumber?: string;
  accountTelephoneNumber?: string;
  addressSid?: string;
  address?: Address;
  authorizedRepresentative: string;
  authorizedRepresentativeEmail: string;
  customerType?: CustomerType;
  authorizedRepresentativeKatakana?: string;
  subMunicipality?: string;
  building?: string;
  katakanaName?: string;
};

export const losingCarrierInformationSchema: Schema<LosingCarrierInformation> =
  s.object<LosingCarrierInformation>({
    customerName: s.string(),
    accountNumber: s.optional(s.string()),
    accountTelephoneNumber: s.optional(s.string()),
    addressSid: s.optional(s.string()),
    address: s.optional(s.lazy(() => addressSchema)),
    authorizedRepresentative: s.string(),
    authorizedRepresentativeEmail: s.string(),
    customerType: s.optional(s.lazy(() => customerTypeSchema)),
    authorizedRepresentativeKatakana: s.optional(s.string()),
    subMunicipality: s.optional(s.string()),
    building: s.optional(s.string()),
    katakanaName: s.optional(s.string()),
    _keysMap: {
      customerName: "customer_name",
      accountNumber: "account_number",
      accountTelephoneNumber: "account_telephone_number",
      addressSid: "address_sid",
      authorizedRepresentative: "authorized_representative",
      authorizedRepresentativeEmail: "authorized_representative_email",
      customerType: "customer_type",
      authorizedRepresentativeKatakana: "authorized_representative_katakana",
      subMunicipality: "sub_municipality",
      katakanaName: "katakana_name",
    },
  });
