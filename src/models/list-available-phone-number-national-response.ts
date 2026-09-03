import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNationalSchema,
  type ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational,
} from "./api-v2010-account-available-phone-number-country-available-phone-number-national.js";

export type ListAvailablePhoneNumberNationalResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  availablePhoneNumbers?: ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNational[];
};

export const listAvailablePhoneNumberNationalResponseSchema: Schema<ListAvailablePhoneNumberNationalResponse> =
  s.object<ListAvailablePhoneNumberNationalResponse>({
    end: s.optional(s.number()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.number()),
    pageSize: s.optional(s.number()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.number()),
    uri: s.optional(s.string()),
    availablePhoneNumbers: s.optional(
      s.array(s.lazy(() => apiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberNationalSchema)),
    ),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
      availablePhoneNumbers: "available_phone_numbers",
    },
  });
