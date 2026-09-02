import { s, type Schema } from "../core/index.js";
import {
  apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSchema,
  type ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal,
} from "./api-v2010-account-incoming-phone-number-incoming-phone-number-local.js";

export type ListIncomingPhoneNumberLocalResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  incomingPhoneNumbers?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal[];
};

export const listIncomingPhoneNumberLocalResponseSchema: Schema<ListIncomingPhoneNumberLocalResponse> =
  s.object<ListIncomingPhoneNumberLocalResponse>({
    end: s.optional(s.number()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.number()),
    pageSize: s.optional(s.number()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.number()),
    uri: s.optional(s.string()),
    incomingPhoneNumbers: s.optional(
      s.array(s.lazy(() => apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocalSchema)),
    ),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
      incomingPhoneNumbers: "incoming_phone_numbers",
    },
  });
