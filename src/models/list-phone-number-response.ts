import { s, type Schema } from "../core/index.js";
import {
  messagingV1ServicePhoneNumberSchema,
  type MessagingV1ServicePhoneNumber,
} from "./messaging-v1-service-phone-number.js";
import { metaSchema, type Meta } from "./meta.js";

export type ListPhoneNumberResponse = {
  phoneNumbers?: MessagingV1ServicePhoneNumber[];
  meta?: Meta;
};

export const listPhoneNumberResponseSchema: Schema<ListPhoneNumberResponse> =
  s.object<ListPhoneNumberResponse>({
    phoneNumbers: s.optional(s.array(s.lazy(() => messagingV1ServicePhoneNumberSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
    _keysMap: {
      phoneNumbers: "phone_numbers",
    },
  });
