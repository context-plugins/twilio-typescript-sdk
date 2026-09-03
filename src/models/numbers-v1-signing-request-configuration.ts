import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NumbersV1SigningRequestConfiguration = {
  logoSid?: string | null;
  friendlyName?: string | null;
  product?: string | null;
  country?: string | null;
  emailSubject?: string | null;
  emailMessage?: string | null;
  urlRedirection?: string | null;
  url?: string | null;
};

export const numbersV1SigningRequestConfigurationSchema: Schema<NumbersV1SigningRequestConfiguration> =
  s.object<NumbersV1SigningRequestConfiguration>({
    logoSid: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    product: s.optionalNullable(s.string()),
    country: s.optionalNullable(s.string()),
    emailSubject: s.optionalNullable(s.string()),
    emailMessage: s.optionalNullable(s.string()),
    urlRedirection: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      logoSid: "logo_sid",
      friendlyName: "friendly_name",
      emailSubject: "email_subject",
      emailMessage: "email_message",
      urlRedirection: "url_redirection",
    },
  });
