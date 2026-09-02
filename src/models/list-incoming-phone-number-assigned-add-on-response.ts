import { s, type Schema } from "../core/index.js";
import {
  apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnSchema,
  type ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn,
} from "./api-v2010-account-incoming-phone-number-incoming-phone-number-assigned-add-on.js";

export type ListIncomingPhoneNumberAssignedAddOnResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  assignedAddOns?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn[];
};

export const listIncomingPhoneNumberAssignedAddOnResponseSchema: Schema<ListIncomingPhoneNumberAssignedAddOnResponse> =
  s.object<ListIncomingPhoneNumberAssignedAddOnResponse>({
    end: s.optional(s.number()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.number()),
    pageSize: s.optional(s.number()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.number()),
    uri: s.optional(s.string()),
    assignedAddOns: s.optional(
      s.array(s.lazy(() => apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnSchema)),
    ),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
      assignedAddOns: "assigned_add_ons",
    },
  });
