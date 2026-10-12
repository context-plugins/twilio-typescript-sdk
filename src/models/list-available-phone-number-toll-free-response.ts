import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFreeSchema,
  type ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree,
} from "./api-v2010-account-available-phone-number-country-available-phone-number-toll-free.js";

export type ListAvailablePhoneNumberTollFreeResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  availablePhoneNumbers?: ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFree[];
};

export const listAvailablePhoneNumberTollFreeResponseSchema: Schema<ListAvailablePhoneNumberTollFreeResponse> =
  s.object<ListAvailablePhoneNumberTollFreeResponse>({
    end: s.optional(s.int()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.int()),
    pageSize: s.optional(s.int()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.int()),
    uri: s.optional(s.string()),
    availablePhoneNumbers: s.optional(
      s.array(s.lazy(() => apiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberTollFreeSchema)),
    ),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
      availablePhoneNumbers: "available_phone_numbers",
    },
  });
