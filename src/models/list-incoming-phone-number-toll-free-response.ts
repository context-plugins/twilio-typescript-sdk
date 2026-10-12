import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSchema,
  type ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree,
} from "./api-v2010-account-incoming-phone-number-incoming-phone-number-toll-free.js";

export type ListIncomingPhoneNumberTollFreeResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  incomingPhoneNumbers?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree[];
};

export const listIncomingPhoneNumberTollFreeResponseSchema: Schema<ListIncomingPhoneNumberTollFreeResponse> =
  s.object<ListIncomingPhoneNumberTollFreeResponse>({
    end: s.optional(s.int()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.int()),
    pageSize: s.optional(s.int()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.int()),
    uri: s.optional(s.string()),
    incomingPhoneNumbers: s.optional(
      s.array(s.lazy(() => apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSchema)),
    ),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
      incomingPhoneNumbers: "incoming_phone_numbers",
    },
  });
