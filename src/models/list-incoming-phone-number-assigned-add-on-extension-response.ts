import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  incomingPhoneNumberAssignedAddOnExtensionSchema,
  type IncomingPhoneNumberAssignedAddOnExtension,
} from "./incoming-phone-number-assigned-add-on-extension.js";

export type ListIncomingPhoneNumberAssignedAddOnExtensionResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  extensions?: IncomingPhoneNumberAssignedAddOnExtension[];
};

export const listIncomingPhoneNumberAssignedAddOnExtensionResponseSchema: Schema<ListIncomingPhoneNumberAssignedAddOnExtensionResponse> =
  s.object<ListIncomingPhoneNumberAssignedAddOnExtensionResponse>({
    end: s.optional(s.number()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.number()),
    pageSize: s.optional(s.number()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.number()),
    uri: s.optional(s.string()),
    extensions: s.optional(s.array(s.lazy(() => incomingPhoneNumberAssignedAddOnExtensionSchema))),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
    },
  });
