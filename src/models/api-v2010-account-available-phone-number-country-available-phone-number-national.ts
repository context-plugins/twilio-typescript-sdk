import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capabilitiesSchema, type Capabilities } from "./capabilities.js";

export type ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational = {
  /** A formatted version of the phone number. */
  friendlyName?: string | null;
  /**
   * The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which
   * consists of a + followed by the country code and subscriber number.
   */
  phoneNumber?: string | null;
  /**
   * The [LATA](https://en.wikipedia.org/wiki/Local_access_and_transport_area) of this phone number.
   * Available for only phone numbers from the US and Canada.
   */
  lata?: string | null;
  /** The locality or city of this phone number's location. */
  locality?: string | null;
  /**
   * The [rate center](https://en.wikipedia.org/wiki/Telephone_exchange) of this phone number.
   * Available for only phone numbers from the US and Canada.
   */
  rateCenter?: string | null;
  /**
   * The latitude of this phone number's location. Available for only phone numbers from the US and
   * Canada.
   */
  latitude?: number | null;
  /**
   * The longitude of this phone number's location. Available for only phone numbers from the US and
   * Canada.
   */
  longitude?: number | null;
  /**
   * The two-letter state or province abbreviation of this phone number's location. Available for
   * only phone numbers from the US and Canada.
   */
  region?: string | null;
  /**
   * The postal or ZIP code of this phone number's location. Available for only phone numbers from
   * the US and Canada.
   */
  postalCode?: string | null;
  /**
   * The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of this phone number.
   */
  isoCountry?: string | null;
  /**
   * The type of [Address](https://www.twilio.com/docs/usage/api/address) resource the phone number
   * requires. Can be: `none`, `any`, `local`, or `foreign`. `none` means no address is required.
   * `any` means an address is required, but it can be anywhere in the world. `local` means an
   * address in the phone number's country is required. `foreign` means an address outside of the
   * phone number's country is required.
   */
  addressRequirements?: string | null;
  /** Whether the phone number is new to the Twilio platform. Can be: `true` or `false`. */
  beta?: boolean | null;
  /**
   * The set of Boolean properties that indicate whether a phone number can receive calls or
   * messages. Capabilities are: `Voice`, `SMS`, and `MMS` and each capability can be: `true` or
   * `false`.
   */
  capabilities?: Capabilities | null;
};

export const apiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNationalSchema: Schema<ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational> =
  s.object<ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational>({
    friendlyName: s.optionalNullable(s.string()),
    phoneNumber: s.optionalNullable(s.string()),
    lata: s.optionalNullable(s.string()),
    locality: s.optionalNullable(s.string()),
    rateCenter: s.optionalNullable(s.string()),
    latitude: s.optionalNullable(s.float64()),
    longitude: s.optionalNullable(s.float64()),
    region: s.optionalNullable(s.string()),
    postalCode: s.optionalNullable(s.string()),
    isoCountry: s.optionalNullable(s.string()),
    addressRequirements: s.optionalNullable(s.string()),
    beta: s.optionalNullable(s.boolean()),
    capabilities: s.optionalNullable(s.lazy(() => capabilitiesSchema)),
    _keysMap: {
      friendlyName: "friendly_name",
      phoneNumber: "phone_number",
      rateCenter: "rate_center",
      postalCode: "postal_code",
      isoCountry: "iso_country",
      addressRequirements: "address_requirements",
    },
  });
