import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMobileSchema,
  type ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMobile,
} from "./api-v2010-account-available-phone-number-country-available-phone-number-mobile.js";

export type ListAvailablePhoneNumberMobileResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  availablePhoneNumbers?: ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMobile[];
};

export const listAvailablePhoneNumberMobileResponseSchema: Schema<ListAvailablePhoneNumberMobileResponse> =
  s.object<ListAvailablePhoneNumberMobileResponse>({
    end: s.optional(s.number()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.number()),
    pageSize: s.optional(s.number()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.number()),
    uri: s.optional(s.string()),
    availablePhoneNumbers: s.optional(
      s.array(s.lazy(() => apiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMobileSchema)),
    ),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
      availablePhoneNumbers: "available_phone_numbers",
    },
  });
