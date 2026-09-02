import { s, type Schema } from "../core/index.js";
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
    end: s.optional(s.number()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.number()),
    pageSize: s.optional(s.number()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.number()),
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
