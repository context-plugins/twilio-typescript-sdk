import { s, type Schema } from "../core/index.js";
import {
  apiV2010AccountIncomingPhoneNumberSchema,
  type ApiV2010AccountIncomingPhoneNumber,
} from "./api-v2010-account-incoming-phone-number.js";

export type ListIncomingPhoneNumberResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  incomingPhoneNumbers?: ApiV2010AccountIncomingPhoneNumber[];
};

export const listIncomingPhoneNumberResponseSchema: Schema<ListIncomingPhoneNumberResponse> =
  s.object<ListIncomingPhoneNumberResponse>({
    end: s.optional(s.number()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.number()),
    pageSize: s.optional(s.number()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.number()),
    uri: s.optional(s.string()),
    incomingPhoneNumbers: s.optional(s.array(s.lazy(() => apiV2010AccountIncomingPhoneNumberSchema))),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
      incomingPhoneNumbers: "incoming_phone_numbers",
    },
  });
