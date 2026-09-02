import { s, type Schema } from "../core/index.js";
import { metaSchema, type Meta } from "./meta.js";
import {
  proxyV1ServicePhoneNumberSchema,
  type ProxyV1ServicePhoneNumber,
} from "./proxy-v1-service-phone-number.js";

export type ListPhoneNumberResponse1 = {
  phoneNumbers?: ProxyV1ServicePhoneNumber[];
  meta?: Meta;
};

export const listPhoneNumberResponse1Schema: Schema<ListPhoneNumberResponse1> =
  s.object<ListPhoneNumberResponse1>({
    phoneNumbers: s.optional(s.array(s.lazy(() => proxyV1ServicePhoneNumberSchema))),
    meta: s.optional(s.lazy(() => metaSchema)),
    _keysMap: {
      phoneNumbers: "phone_numbers",
    },
  });
