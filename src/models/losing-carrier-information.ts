import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { customerTypeSchema, type CustomerType } from "./customer-type.js";

export type LosingCarrierInformation = {
  /**
   * Customer name as it is registered with the losing carrier. This can be an individual or a
   * business name depending on the customer type selected.
   */
  customerName: string;
  /**
   * The account number of the customer for the losing carrier. Only require for mobile phone
   * numbers.
   */
  accountNumber?: string;
  /** The account phone number of the customer for the losing carrier. */
  accountTelephoneNumber?: string;
  /**
   * If you already have an Address SID that represents the address needed for the LOA, you can
   * provide an Address SID instead of providing the address object in the request body. This will
   * copy the address into the port in request. If changes are made to the Address SID after port in
   * request creation, those changes will not be reflected in the port in request.
   */
  addressSid?: string;
  address?: Address;
  /**
   * The first and last name of the person listed with the losing carrier who is authorized to make
   * changes on the account.
   */
  authorizedRepresentative: string;
  /**
   * Email address of the person (owner of the number) who will sign the letter of authorization for
   * the port in request. This email address should belong to the person named in as the authorized
   * representative.
   */
  authorizedRepresentativeEmail: string;
  /**
   * The type of customer account in the losing carrier. This should either be: 'Individual' or
   * 'Business'.
   */
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
