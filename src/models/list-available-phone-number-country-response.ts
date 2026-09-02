import { s, type Schema } from "../core/index.js";
import {
  apiV2010AccountAvailablePhoneNumberCountrySchema,
  type ApiV2010AccountAvailablePhoneNumberCountry,
} from "./api-v2010-account-available-phone-number-country.js";

export type ListAvailablePhoneNumberCountryResponse = {
  countries?: ApiV2010AccountAvailablePhoneNumberCountry[];
  uri?: string | null;
};

export const listAvailablePhoneNumberCountryResponseSchema: Schema<ListAvailablePhoneNumberCountryResponse> =
  s.object<ListAvailablePhoneNumberCountryResponse>({
    countries: s.optional(s.array(s.lazy(() => apiV2010AccountAvailablePhoneNumberCountrySchema))),
    uri: s.optionalNullable(s.string()),
  });
